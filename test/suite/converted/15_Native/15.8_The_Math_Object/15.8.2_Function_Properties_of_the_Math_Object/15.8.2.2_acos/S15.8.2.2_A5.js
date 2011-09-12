// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Math.acos, recommended that implementations use the approximation algorithms for IEEE 754 arithmetic contained in fdlibm
 *
 * @section 15.8.2.2
 * @path 15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.2_acos/S15.8.2.2_A5.js
 * @description Checking if Math.acos is approximately equals to its mathematical values on the set of 64 argument values; all the sample values is calculated with LibC
 */

$INCLUDE("math_precision.js");
$INCLUDE("math_isequal.js");

// CHECK#1
vnum = 64;
var x = new Array();
x[0] = -1.00000000000000000000;
x[1] = -0.96825396825396826000;
x[2] = -0.93650793650793651000;
x[3] = -0.90476190476190477000;
x[4] = -0.87301587301587302000;
x[5] = -0.84126984126984128000;
x[6] = -0.80952380952380953000;
x[7] = -0.77777777777777779000;
x[8] = -0.74603174603174605000;
x[9] = -0.71428571428571430000;
x[10] = -0.68253968253968256000;
x[11] = -0.65079365079365081000;
x[12] = -0.61904761904761907000;
x[13] = -0.58730158730158732000;
x[14] = -0.55555555555555558000;
x[15] = -0.52380952380952384000;
x[16] = -0.49206349206349209000;
x[17] = -0.46031746031746035000;
x[18] = -0.42857142857142860000;
x[19] = -0.39682539682539686000;
x[20] = -0.36507936507936511000;
x[21] = -0.33333333333333337000;
x[22] = -0.30158730158730163000;
x[23] = -0.26984126984126988000;
x[24] = -0.23809523809523814000;
x[25] = -0.20634920634920639000;
x[26] = -0.17460317460317465000;
x[27] = -0.14285714285714290000;
x[28] = -0.11111111111111116000;
x[29] = -0.07936507936507941600;
x[30] = -0.04761904761904767200;
x[31] = -0.01587301587301592800;
x[32] = 0.01587301587301581700;
x[33] = 0.04761904761904767200;
x[34] = 0.07936507936507930500;
x[35] = 0.11111111111111116000;
x[36] = 0.14285714285714279000;
x[37] = 0.17460317460317465000;
x[38] = 0.20634920634920628000;
x[39] = 0.23809523809523814000;
x[40] = 0.26984126984126977000;
x[41] = 0.30158730158730163000;
x[42] = 0.33333333333333326000;
x[43] = 0.36507936507936511000;
x[44] = 0.39682539682539675000;
x[45] = 0.42857142857142860000;
x[46] = 0.46031746031746024000;
x[47] = 0.49206349206349209000;
x[48] = 0.52380952380952372000;
x[49] = 0.55555555555555558000;
x[50] = 0.58730158730158721000;
x[51] = 0.61904761904761907000;
x[52] = 0.65079365079365070000;
x[53] = 0.68253968253968256000;
x[54] = 0.71428571428571419000;
x[55] = 0.74603174603174605000;
x[56] = 0.77777777777777768000;
x[57] = 0.80952380952380953000;
x[58] = 0.84126984126984117000;
x[59] = 0.87301587301587302000;
x[60] = 0.90476190476190466000;
x[61] = 0.93650793650793651000;
x[62] = 0.96825396825396814000;
x[63] = 1.00000000000000000000;




var y = new Array();
y[0] = 3.14159265358979310000;
y[1] = 2.88894492730522990000;
y[2] = 2.78333143507717650000;
y[3] = 2.70161669879887430000;
y[4] = 2.63214880477790030000;
y[5] = 2.57042415502425570000;
y[6] = 2.51413688066660250000;
y[7] = 2.46191883468154950000;
y[8] = 2.41287920284638750000;
y[9] = 2.36639928027943200000;
y[10] = 2.32202832592153240000;
y[11] = 2.27942559835728040000;
y[12] = 2.23832577143072960000;
y[13] = 2.19851714445280910000;
y[14] = 2.15982729701117070000;
y[15] = 2.12211329592677920000;
y[16] = 2.08525480235608330000;
y[17] = 2.04914909144415440000;
y[18] = 2.01370737086853560000;
y[19] = 1.97885200409617520000;
y[20] = 1.94451437773781040000;
y[21] = 1.91063323624901860000;
y[22] = 1.87715336135181590000;
y[23] = 1.84402450933553450000;
y[24] = 1.81120054356415610000;
y[25] = 1.77863871614824330000;
y[26] = 1.74629906437061930000;
y[27] = 1.71414389570026190000;
y[28] = 1.68213734113586070000;
y[29] = 1.65024496088003380000;
y[30] = 1.61843338941929970000;
y[31] = 1.58667000928485250000;
y[32] = 1.55492264430494110000;
y[33] = 1.52315926417049340000;
y[34] = 1.49134769270975950000;
y[35] = 1.45945531245393270000;
y[36] = 1.42744875788953140000;
y[37] = 1.39529358921917380000;
y[38] = 1.36295393744155000000;
y[39] = 1.33039211002563730000;
y[40] = 1.29756814425425880000;
y[41] = 1.26443929223797750000;
y[42] = 1.23095941734077470000;
y[43] = 1.19707827585198270000;
y[44] = 1.16274064949361830000;
y[45] = 1.12788528272125750000;
y[46] = 1.09244356214563900000;
y[47] = 1.05633785123370980000;
y[48] = 1.01947935766301390000;
y[49] = 0.98176535657862274000;
y[50] = 0.94307550913698401000;
y[51] = 0.90326688215906359000;
y[52] = 0.86216705523251280000;
y[53] = 0.81956432766826082000;
y[54] = 0.77519337331036142000;
y[55] = 0.72871345074340554000;
y[56] = 0.67967381890824408000;
y[57] = 0.62745577292319077000;
y[58] = 0.57116849856553775000;
y[59] = 0.50944384881189297000;
y[60] = 0.43997595479091917000;
y[61] = 0.35826121851261677000;
y[62] = 0.25264772628456394000;
y[63] = 0.00000000000000000000;




var val;
for (i = 0; i < vnum; i++)
{
	val = Math.acos(x[i]);
	if (!isEqual(val, y[i]))
	{
		$ERROR("\nx = " + x[i] + "\nlibc.acos(x) = " + y[i] + "\nMath.acos(x) = " + Math.acos(x[i]) + "\nMath.abs(libc.acos(x) - Math.acos(x)) > " + prec + "\n\n"); 
	}
}

