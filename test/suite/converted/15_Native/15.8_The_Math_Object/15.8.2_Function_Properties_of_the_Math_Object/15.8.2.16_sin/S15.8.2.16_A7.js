// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Math.sin it is recommended that implementations use the approximation algorithms for IEEE 754 arithmetic contained in fdlibm
 *
 * @path 15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.16_sin/S15.8.2.16_A7.js
 * @description Checking if Math.sin is approximately equals to its mathematical values on the set of 64 argument values; all the sample values is calculated with LibC
 */

$INCLUDE("math_precision.js");
$INCLUDE("math_isequal.js");

// CHECK#1
vnum = 64;
var x = new Array();
x[0] = 0.00000000000000000000;
x[1] = 0.09973310011396169200;
x[2] = 0.19946620022792338000;
x[3] = 0.29919930034188508000;
x[4] = 0.39893240045584677000;
x[5] = 0.49866550056980841000;
x[6] = 0.59839860068377015000;
x[7] = 0.69813170079773179000;
x[8] = 0.79786480091169354000;
x[9] = 0.89759790102565518000;
x[10] = 0.99733100113961681000;
x[11] = 1.09706410125357840000;
x[12] = 1.19679720136754030000;
x[13] = 1.29653030148150190000;
x[14] = 1.39626340159546360000;
x[15] = 1.49599650170942520000;
x[16] = 1.59572960182338710000;
x[17] = 1.69546270193734870000;
x[18] = 1.79519580205131040000;
x[19] = 1.89492890216527200000;
x[20] = 1.99466200227923360000;
x[21] = 2.09439510239319570000;
x[22] = 2.19412820250715690000;
x[23] = 2.29386130262111850000;
x[24] = 2.39359440273508060000;
x[25] = 2.49332750284904230000;
x[26] = 2.59306060296300390000;
x[27] = 2.69279370307696550000;
x[28] = 2.79252680319092720000;
x[29] = 2.89225990330488880000;
x[30] = 2.99199300341885040000;
x[31] = 3.09172610353281210000;
x[32] = 3.19145920364677420000;
x[33] = 3.29119230376073580000;
x[34] = 3.39092540387469740000;
x[35] = 3.49065850398865910000;
x[36] = 3.59039160410262070000;
x[37] = 3.69012470421658230000;
x[38] = 3.78985780433054400000;
x[39] = 3.88959090444450560000;
x[40] = 3.98932400455846730000;
x[41] = 4.08905710467242840000;
x[42] = 4.18879020478639140000;
x[43] = 4.28852330490035260000;
x[44] = 4.38825640501431380000;
x[45] = 4.48798950512827590000;
x[46] = 4.58772260524223710000;
x[47] = 4.68745570535619920000;
x[48] = 4.78718880547016120000;
x[49] = 4.88692190558412240000;
x[50] = 4.98665500569808450000;
x[51] = 5.08638810581204570000;
x[52] = 5.18612120592600780000;
x[53] = 5.28585430603996990000;
x[54] = 5.38558740615393110000;
x[55] = 5.48532050626789310000;
x[56] = 5.58505360638185430000;
x[57] = 5.68478670649581550000;
x[58] = 5.78451980660977760000;
x[59] = 5.88425290672373970000;
x[60] = 5.98398600683770090000;
x[61] = 6.08371910695166300000;
x[62] = 6.18345220706562420000;
x[63] = 6.28318530717958620000;


var y = new Array();
y[0] = 0.00000000000000000000;
y[1] = 0.09956784659581666100;
y[2] = 0.19814614319939758000;
y[3] = 0.29475517441090421000;
y[4] = 0.38843479627469474000;
y[5] = 0.47825397862131819000;
y[6] = 0.56332005806362206000;
y[7] = 0.64278760968653925000;
y[8] = 0.71586684925971844000;
y[9] = 0.78183148246802980000;
y[10] = 0.84002592315077140000;
y[11] = 0.88987180881146855000;
y[12] = 0.93087374864420425000;
y[13] = 0.96262424695001203000;
y[14] = 0.98480775301220802000;
y[15] = 0.99720379718118013000;
y[16] = 0.99968918200081625000;
y[17] = 0.99223920660017206000;
y[18] = 0.97492791218182362000;
y[19] = 0.94792734616713181000;
y[20] = 0.91150585231167325000;
y[21] = 0.86602540378443849000;
y[22] = 0.81193800571585661000;
y[23] = 0.74978120296773443000;
y[24] = 0.68017273777091936000;
y[25] = 0.60380441032547738000;
y[26] = 0.52143520337949811000;
y[27] = 0.43388373911755823000;
y[28] = 0.34202014332566888000;
y[29] = 0.24675739769029384000;
y[30] = 0.14904226617617472000;
y[31] = 0.04984588566069748200;
y[32] = -0.04984588566069723300;
y[33] = -0.14904226617617447000;
y[34] = -0.24675739769029362000;
y[35] = -0.34202014332566866000;
y[36] = -0.43388373911755801000;
y[37] = -0.52143520337949789000;
y[38] = -0.60380441032547716000;
y[39] = -0.68017273777091913000;
y[40] = -0.74978120296773398000;
y[41] = -0.81193800571585595000;
y[42] = -0.86602540378443882000;
y[43] = -0.91150585231167314000;
y[44] = -0.94792734616713159000;
y[45] = -0.97492791218182362000;
y[46] = -0.99223920660017195000;
y[47] = -0.99968918200081625000;
y[48] = -0.99720379718118013000;
y[49] = -0.98480775301220813000;
y[50] = -0.96262424695001203000;
y[51] = -0.93087374864420447000;
y[52] = -0.88987180881146866000;
y[53] = -0.84002592315077129000;
y[54] = -0.78183148246802991000;
y[55] = -0.71586684925971833000;
y[56] = -0.64278760968653958000;
y[57] = -0.56332005806362273000;
y[58] = -0.47825397862131858000;
y[59] = -0.38843479627469474000;
y[60] = -0.29475517441090471000;
y[61] = -0.19814614319939772000;
y[62] = -0.09956784659581728600;
y[63] = -0.0000000000000002449293598294706400;


var val;
for (i = 0; i < vnum; i++)
{
	val = Math.sin(x[i]);
	if (!isEqual(val, y[i]))
	{
		$ERROR("\nx = " + x[i] + "\nlibc.sin(x) = " + y[i] + "\nMath.sin(x) = " + Math.sin(x[i]) + "\nMath.abs(libc.sin(x) - Math.sin(x)) > " + prec + "\n\n"); 
	}
}

