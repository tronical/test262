param($suiteVersion)

$CURRPATH = split-path -parent $MyInvocation.MyCommand.Definition

$rootDir = "$CURRPATH\..\..\test\suite"
$webRootPath = "$CURRPATH\..\..\website\resources\scripts\testcases"
$webRootPathOnServer = "resources/scripts/testcases/"
$excludeListFilename = "$CURRPATH\..\..\test\config\excludelist.xml"
$testHarnessDir = "$CURRPATH\..\..\test\harness"
$testHarnessFiles = dir $testHarnessDir\*.js
if (! $?) {
    echo "Error detecting test harness files!"
    exit 1
}
$testHarnessWebsiteDir = "$CURRPATH\..\..\website\resources\scripts\global"

#--Sanity checks--------------------------------------------------------------#
if (! (test-path $rootDir)) {
    echo "Cannot generate (JSON) test262 tests when the path containing said tests, $rootDir, does not exist!"
    exit 1
}

if (! (test-path $webRootPath)) {
    echo "Cannot generate (JSON) test262 tests to '$webRootPath' when it does not exist!"
    exit 1
}

if (! (test-path $excludeListFilename)) {
    echo "Cannot generate (JSON) test262 tests without a file, $excludeListFilename, showing which tests have been disabled!"
    exit 1
}


if ($suiteVersion -eq $null) {
    echo "A test262 suite version must be specified to run this script!"
    exit 1
}

if ($testHarnessFiles.Length -lt 3) {
    echo "There are less than five test harness files under $testHarnessDir. Something must be wrong!"
    exit 1
}

#--Globals--------------------------------------------------------------------#

#Directories under "test\suite\" containing ES5 test chapter directories
#with *.js tests underneath them
$contributionDirs = @("sputnik_converted", "ietestcenter")

#a list of all ES5 test chapter directories
$global:chapters = @()


$max_tests_per_json = 1000;

function dirWalker($dirName) {
    #First check to see if it has test files directly inside it
    $temp = @(dir $dirName.FullName | where-object{$_.Attributes -ne "Directory"});
    if ($temp -ne $null) {
        #If it does, there's nothing more we can do
        $global:chapters += @($dirName);
        return;
    }
    
    #Next check to see if all *.js files under this directory exceed our max
    #for a JSON file
    $temp = @(dir -recurse -include "*.js" $dirName.FullName);
    if ($temp -eq $null) {
        echo "ERROR:  expected there to be JavaScript tests under $dirName!";
        exit 1;
    }
    elseif ($temp.length -lt $max_tests_per_json) {
        $global:chapters += @($dirName);
        return;
    }
    else {
        #Max has been exceeded.  We need to look at each subdir individually
        $temp = dir $dirName.FullName
        foreach ($tempSubdir in $temp) {
            dirWalker($tempSubdir);
        }
    }
}


foreach($tempDirName in $contributionDirs) {
    if (! (test-path $rootDir\$tempDirName)) {
        echo "The expected ES5 test directory, $rootDir\$tempDirName, did not exist!"
        exit 1
    }
    dirWalker(new-object -typename System.IO.DirectoryInfo -argumentlist "$rootDir\$tempDirName");
}

  
$masterList=[xml]$templateMasterList
$numTests=0
#total number of tests accross the entire set of tests. 
$totalNumTests=0
$utf8Encoding = New-Object System.Text.UTF8Encoding
[xml]$excludeList= get-content $excludeListFilename


#--HELPERS---------------------------------------------------------------------
function isTestStarted($line) {
    #Note this is a naive approach on the sense that "/*abc*/" could be on one
    #line.  However, we know for a fact this is not the case in IE Test Center
    #or Sputnik tests.
    if ($global:multilineComment -and ($line -match "\*/")) {  #End of a newline comment
        $global:multilineComment = $false;  
        return $false;      
    } elseif ($line -match "/\*") {       #Beginning of a newline comment
        $global:multilineComment = $true;
        return $false;
    } elseif ($global:multilineComment) { #//we're already in a multi-line comment that hasn't ended
        return $false;
    } elseif ($line -match "^\s*//") {    #//blah
        return $false; 
    } elseif ($line -match "^\s*$") {     #newlines
        return $false;
    } elseif ($line -match "ES5Harness") { #definitely start of the test!
        return $true;
    }
    return $true;  #fell through...better  to assume the test has started!
}
#--MAIN------------------------------------------------------------------------
#add quotes around a string to package it in JSON
function Encode($str)
{
    return "`""+$str+"`""
}

#the following functions open and close json dictionary and array
function OpenDict
{
"{"
}
function CloseDict ($d)
{
return $d + "}"
}
function OpenArray
{
"["
}
function CloseArray ($a)
{
    return $a + "]"
}

#add a node to an open dictionary. If it is first, do not add a comma. 
#Some json parsers are sensitive and won't parse if the last element has a comma at the end
function AddDictNode($d, $n, $IsFirst)
{
    if ($IsFirst) {
        $o = $d + $n
    } else 
    {
        $o = $d + "," + $n 
    }
    return $o
}
#add a node to an open array
function AddArrayElement($a, $n, $IsFirst)
{
    if ($IsFirst) {
        $o = $a + $n
    } else 
    {
        $o = $a + "," + $n 
    }
    return $o
}

#this creates a dictionary node for a given key and value which is non-string
function CreateNode($k, $v)
{
$t = Encode $k
return $t+":"+$v
}
# a similar node except where the value is a string
function CreateStringNode($a, $b)
{
$t1 = Encode $a
$t2 = Encode $b
return $t1+":"+$t2
}

function IsNullOrEmpty($str) {if ($str) {return $false} else {return $true}}

$testSuite = OpenArray
$count = 0

foreach($chapter in $global:chapters)
{
    echo "Generating test cases for ES5 chapter: $chapter"
    #create dictionaries for all our tests and a section
    $testsList = OpenDict    
    $sect = OpenDict        
    $sectionName ="Chapter - "+$Chapter.Name
    $sectionNameNode = CreateStringNode "name" $sectionName    
    #create an array for tests in a chapter
    $tests = OpenArray
    $sourceFiles = @(get-childitem $chapter.FullName -include *.js -recurse | where-object{$_.mode -notmatch "d"})
    if($sourceFiles -ne $NULL)
    {
        $excluded=0
        $testCount = 0
        foreach($test in $sourceFiles){
        $testName=$test.Name.Remove($test.Name.Length-3)
         if(($testName.length -gt 0) -and ($excludeList.excludeList.SelectNodes("test[@id ='"+$testName+"']").Count -eq 0))
         {
            # dictionary for each test
            $testDict = OpenDict
            $idNode = CreateStringNode "id" $testName
            #id node is our first node in the test dictionary             
            $testDict = AddDictNode $testDict $idNode $true

            $scriptCode=Get-Content -Encoding UTF8 $test.FullName
            $scriptCodeContent=""
            #Rip out license headers that add unnecessary bytes to the JSON'ized test cases
            $inBeginning = $true
            $global:multilineComment = $false
            foreach($line in $scriptCode) {
                if ($inBeginning) {
                    $isStarted = isTestStarted($line)
                    if (! $isStarted) {
                        continue;
                    }
                    $inBeginning = $false
                }
                $scriptCodeContent+=$line+"`r`n"
            }            
            $scriptCodeContent=[Convert]::ToBase64String($utf8Encoding.GetBytes($scriptCodeContent))
            $codeNode = CreateStringNode "code" $scriptCodeContent                        
            #add the test encoded code node to our test dictionary
            $testDict = AddDictNode $testDict $codeNode $false
            #now close the dictionary for the test
            $testDict = CloseDict($testDict)
            
            #this adds the test to our tests array. Should we add a comma or not
            if ($testCount -eq 0) {
                $tests = AddArrayElement $tests $testDict $true
            }
            else {
                $tests = AddArrayElement $tests $testDict $false
            }
            $testCount += 1

          }
           else
            {
             $excluded++
           }

         }
         #we have completed our tests. Close the tests array
        $tests = CloseArray $tests
        $testsNode = CreateNode "tests" $tests

        $numTests=($sourceFiles.Length-$excluded ).ToString()
        #number of tests in our chapter. Create a node
        $numTestsNode = CreateStringNode "numTests" $numTests
        
        # add sectiopn node, number of tests and the tests themselves.         
        $sect = AddDictNode $sect $sectionNameNode $true
        $sect = AddDictNode $sect $numTestsNode $false
        $sect = AddDictNode $sect $testsNode $false
        #close the section dictionary node
        $sect = CloseDict $sect

        #create a node for the tests and add it to our testsLists
        $testCollectionNode = CreateNode "testsCollection" $sect        
        $testsList = AddDictNode $testsList $testCollectionNode $true
        $testsList = CloseDict $testsList
             
        $testGroupPathname=$webRootPath+"\"+$chapter.Name+".json"
        
        #if you want to use jsmin to minimize the .json file, use the 2nd line. Otherwise 1st
        $testsList | out-file -encoding ASCII $testGroupPathname
        #$testsList |  .\jsmin.exe | out-file  -encoding ASCII $testGroupPathname
        

        #add the name of the chapter test to our complete list
        $filename = $webRootPathOnServer + $chapter.Name+".json"        
        $filenameEnc = Encode $filename
        if ($count -eq 0) {
            $testSuite = AddArrayElement $testSuite $filenameEnc $true
        }
        else {
            $testSuite = AddArrayElement $testSuite $filenameEnc $false
        }
        $count += 1

        
        $totalNumTests+= $sourceFiles.Length-$excluded
    }
}
#we now have the list of files for each chapter. Close that array
$testSuite = CloseArray $testSuite
#create a root node for our suite
$testSuiteRoot = OpenDict
#create a node for total number of tests across all chapters
$totalNumTestsNode = CreateNode "numTests" $totalNumTests
#create suiteversion node
$suiteVersionEnc = Encode $suiteVersion
$suiteVersionNode = CreateNode "version" $suiteVersionEnc
#create a date node
$dateStr = [datetime]::Now.Date.toString("MM/dd/yyyy") 
$dateEnc = Encode $dateStr
$dateNode = CreateNode "date" $dateEnc
#add the nodes to our suites dictionary
$testSuiteRoot = AddDictNode $testSuiteRoot $totalNumTestsNode $true
$testSuiteRoot = AddDictNode $testSuiteRoot $suiteVersionNode $false
$testSuiteRoot = AddDictNode $testSuiteRoot $dateNode $false
$testSuiteNode = CreateNode "testSuite" $testSuite
$testSuiteRoot = AddDictNode $testSuiteRoot $testSuiteNode $false
#close the testsuite and write it to the root file
$testSuiteRoot = CloseDict $testSuiteRoot
$testcaseslistPathName = $webRootPath+"\testcaseslist.json"
$testSuiteRoot | out-file -encoding ASCII $testcaseslistPathName

#Deploy test harness to website as well
echo ""
echo "Deploying test harness files to '$testHarnessWebsiteDir'..."
foreach ($fileName in $testHarnessFiles) {
    $shortName = $fileName.Name
    cp -force $fileName $testHarnessWebsiteDir\
    if (! $?) {
        echo "Failed to copy $fileName!"
    }
    elseif (! (test-path $testHarnessWebsiteDir\$shortName)) {
        echo "Failed to copy $fileName!"
    }
}
echo "Done."
