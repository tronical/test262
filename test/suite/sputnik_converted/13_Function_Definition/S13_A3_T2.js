// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13_A3_T2;
* @section: 13;
* @assertion: The Identifier in a FunctionExpression can be referenced from inside the FunctionExpression's FunctionBody to allow the function calling itself recursively;
* @description: Creating a recursive function that calculates factorial, as a variable. 
* Function calls itself by the name of the variable;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.0_A3_T2",

path: "13.0",

description: "Creating a recursive function that calculates factorial, as a variable.",

test: function testcase() {
   var __func = function (arg){
    if (arg === 1) {
    	return arg;
    } else {
    	return __func(arg-1)*arg;
    }
};

var fact_of_3 =  __func(3);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (fact_of_3 !== 6) {
	$ERROR("#1: fact_of_3 === 6. Actual: fact_of_3 ==="+fact_of_3);
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

