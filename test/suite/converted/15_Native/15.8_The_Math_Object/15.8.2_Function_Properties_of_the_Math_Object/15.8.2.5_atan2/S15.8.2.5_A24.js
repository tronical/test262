// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Math.atan2, recommended that implementations use the approximation algorithms for IEEE 754 arithmetic contained in fdlibm
 *
 * @path 15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.5_atan2/S15.8.2.5_A24.js
 * @description Checking if Math.atan2(argument1, argument2) is approximately equals to its mathematical values on the set of 64 argument1 values and 64 argument2 values; all the sample values is calculated with LibC
 */

$INCLUDE("math_precision.js");
$INCLUDE("math_isequal.js");

// CHECK#1
vnum = 64;
var x1 = new Array();
x1[0] = -16.00000000000000000000;
x1[1] = -15.49206349206349200000;
x1[2] = -14.98412698412698400000;
x1[3] = -14.47619047619047600000;
x1[4] = -13.96825396825396800000;
x1[5] = -13.46031746031746000000;
x1[6] = -12.95238095238095300000;
x1[7] = -12.44444444444444500000;
x1[8] = -11.93650793650793700000;
x1[9] = -11.42857142857142900000;
x1[10] = -10.92063492063492100000;
x1[11] = -10.41269841269841300000;
x1[12] = -9.90476190476190510000;
x1[13] = -9.39682539682539720000;
x1[14] = -8.88888888888888930000;
x1[15] = -8.38095238095238140000;
x1[16] = -7.87301587301587350000;
x1[17] = -7.36507936507936560000;
x1[18] = -6.85714285714285770000;
x1[19] = -6.34920634920634970000;
x1[20] = -5.84126984126984180000;
x1[21] = -5.33333333333333390000;
x1[22] = -4.82539682539682600000;
x1[23] = -4.31746031746031810000;
x1[24] = -3.80952380952381020000;
x1[25] = -3.30158730158730230000;
x1[26] = -2.79365079365079440000;
x1[27] = -2.28571428571428650000;
x1[28] = -1.77777777777777860000;
x1[29] = -1.26984126984127070000;
x1[30] = -0.76190476190476275000;
x1[31] = -0.25396825396825484000;
x1[32] = 0.25396825396825307000;
x1[33] = 0.76190476190476275000;
x1[34] = 1.26984126984126890000;
x1[35] = 1.77777777777777860000;
x1[36] = 2.28571428571428470000;
x1[37] = 2.79365079365079440000;
x1[38] = 3.30158730158730050000;
x1[39] = 3.80952380952381020000;
x1[40] = 4.31746031746031630000;
x1[41] = 4.82539682539682600000;
x1[42] = 5.33333333333333210000;
x1[43] = 5.84126984126984180000;
x1[44] = 6.34920634920634800000;
x1[45] = 6.85714285714285770000;
x1[46] = 7.36507936507936380000;
x1[47] = 7.87301587301587350000;
x1[48] = 8.38095238095237960000;
x1[49] = 8.88888888888888930000;
x1[50] = 9.39682539682539540000;
x1[51] = 9.90476190476190510000;
x1[52] = 10.41269841269841100000;
x1[53] = 10.92063492063492100000;
x1[54] = 11.42857142857142700000;
x1[55] = 11.93650793650793700000;
x1[56] = 12.44444444444444300000;
x1[57] = 12.95238095238095300000;
x1[58] = 13.46031746031745900000;
x1[59] = 13.96825396825396800000;
x1[60] = 14.47619047619047400000;
x1[61] = 14.98412698412698400000;
x1[62] = 15.49206349206349000000;
x1[63] = 16.00000000000000000000;


var x2 = new Array();
x2[0] = -8.00000000000000000000;
x2[1] = -7.74603174603174600000;
x2[2] = -7.49206349206349210000;
x2[3] = -7.23809523809523810000;
x2[4] = -6.98412698412698420000;
x2[5] = -6.73015873015873020000;
x2[6] = -6.47619047619047630000;
x2[7] = -6.22222222222222230000;
x2[8] = -5.96825396825396840000;
x2[9] = -5.71428571428571440000;
x2[10] = -5.46031746031746050000;
x2[11] = -5.20634920634920650000;
x2[12] = -4.95238095238095260000;
x2[13] = -4.69841269841269860000;
x2[14] = -4.44444444444444460000;
x2[15] = -4.19047619047619070000;
x2[16] = -3.93650793650793670000;
x2[17] = -3.68253968253968280000;
x2[18] = -3.42857142857142880000;
x2[19] = -3.17460317460317490000;
x2[20] = -2.92063492063492090000;
x2[21] = -2.66666666666666700000;
x2[22] = -2.41269841269841300000;
x2[23] = -2.15873015873015910000;
x2[24] = -1.90476190476190510000;
x2[25] = -1.65079365079365110000;
x2[26] = -1.39682539682539720000;
x2[27] = -1.14285714285714320000;
x2[28] = -0.88888888888888928000;
x2[29] = -0.63492063492063533000;
x2[30] = -0.38095238095238138000;
x2[31] = -0.12698412698412742000;
x2[32] = 0.12698412698412653000;
x2[33] = 0.38095238095238138000;
x2[34] = 0.63492063492063444000;
x2[35] = 0.88888888888888928000;
x2[36] = 1.14285714285714230000;
x2[37] = 1.39682539682539720000;
x2[38] = 1.65079365079365030000;
x2[39] = 1.90476190476190510000;
x2[40] = 2.15873015873015820000;
x2[41] = 2.41269841269841300000;
x2[42] = 2.66666666666666610000;
x2[43] = 2.92063492063492090000;
x2[44] = 3.17460317460317400000;
x2[45] = 3.42857142857142880000;
x2[46] = 3.68253968253968190000;
x2[47] = 3.93650793650793670000;
x2[48] = 4.19047619047618980000;
x2[49] = 4.44444444444444460000;
x2[50] = 4.69841269841269770000;
x2[51] = 4.95238095238095260000;
x2[52] = 5.20634920634920560000;
x2[53] = 5.46031746031746050000;
x2[54] = 5.71428571428571350000;
x2[55] = 5.96825396825396840000;
x2[56] = 6.22222222222222140000;
x2[57] = 6.47619047619047630000;
x2[58] = 6.73015873015872930000;
x2[59] = 6.98412698412698420000;
x2[60] = 7.23809523809523720000;
x2[61] = 7.49206349206349210000;
x2[62] = 7.74603174603174520000;
x2[63] = 8.00000000000000000000;


var y = new Array();
y[0] = -2.03444393579570270000;
y[1] = -2.03444393579570270000;
y[2] = -2.03444393579570270000;
y[3] = -2.03444393579570270000;
y[4] = -2.03444393579570270000;
y[5] = -2.03444393579570270000;
y[6] = -2.03444393579570270000;
y[7] = -2.03444393579570270000;
y[8] = -2.03444393579570270000;
y[9] = -2.03444393579570270000;
y[10] = -2.03444393579570270000;
y[11] = -2.03444393579570270000;
y[12] = -2.03444393579570270000;
y[13] = -2.03444393579570270000;
y[14] = -2.03444393579570270000;
y[15] = -2.03444393579570270000;
y[16] = -2.03444393579570270000;
y[17] = -2.03444393579570270000;
y[18] = -2.03444393579570270000;
y[19] = -2.03444393579570270000;
y[20] = -2.03444393579570270000;
y[21] = -2.03444393579570270000;
y[22] = -2.03444393579570270000;
y[23] = -2.03444393579570270000;
y[24] = -2.03444393579570270000;
y[25] = -2.03444393579570270000;
y[26] = -2.03444393579570270000;
y[27] = -2.03444393579570270000;
y[28] = -2.03444393579570270000;
y[29] = -2.03444393579570270000;
y[30] = -2.03444393579570270000;
y[31] = -2.03444393579570270000;
y[32] = 1.10714871779409040000;
y[33] = 1.10714871779409040000;
y[34] = 1.10714871779409040000;
y[35] = 1.10714871779409040000;
y[36] = 1.10714871779409040000;
y[37] = 1.10714871779409040000;
y[38] = 1.10714871779409040000;
y[39] = 1.10714871779409040000;
y[40] = 1.10714871779409040000;
y[41] = 1.10714871779409040000;
y[42] = 1.10714871779409040000;
y[43] = 1.10714871779409040000;
y[44] = 1.10714871779409040000;
y[45] = 1.10714871779409040000;
y[46] = 1.10714871779409040000;
y[47] = 1.10714871779409040000;
y[48] = 1.10714871779409040000;
y[49] = 1.10714871779409040000;
y[50] = 1.10714871779409040000;
y[51] = 1.10714871779409040000;
y[52] = 1.10714871779409040000;
y[53] = 1.10714871779409040000;
y[54] = 1.10714871779409040000;
y[55] = 1.10714871779409040000;
y[56] = 1.10714871779409040000;
y[57] = 1.10714871779409040000;
y[58] = 1.10714871779409040000;
y[59] = 1.10714871779409040000;
y[60] = 1.10714871779409040000;
y[61] = 1.10714871779409040000;
y[62] = 1.10714871779409040000;
y[63] = 1.10714871779409040000;



var val;
for (i = 0; i < vnum; i++)
{
	val = Math.atan2(x1[i], x2[i]);
	if (!isEqual(val, y[i]))
	{
		$ERROR("\nx1 = " + x1[i] + "\nx2 = " + x2[i] + "\nlibc.atan2(x1,x2) = " + y[i] + "\nMath.atan2(x1,x2) = " + Math.atan2(x1[i],x2[i]) + "\nMath.abs(libc.atan2(x1,x2) - Math.atan2(x1,x2)) > " + prec + "\n\n"); 
	}
}

