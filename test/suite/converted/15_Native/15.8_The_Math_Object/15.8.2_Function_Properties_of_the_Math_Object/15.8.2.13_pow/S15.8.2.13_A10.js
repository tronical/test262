// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If abs(x)<1 and y is -Infinity, Math.pow(x,y) is +Infinity
 *
 * @section 15.8.2.13
 * @path 15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.13_pow/S15.8.2.13_A10.js
 * @description Checking if Math.pow(x,y) equals to +Infinity, where abs(x)<1 and y is -Infinity
 */

// CHECK#1

y = -Infinity;
x = new Array();
x[0] = 0.999999999999999;
x[1] = 0.5;
x[2] = +0;
x[3] = -0;
x[4] = -0.5;
x[5] = -0.999999999999999;
xnum = 6;

for (i = 0; i < xnum; i++)
{
	if (Math.pow(x[i],y) !== +Infinity)
	{
		$ERROR("#1: Math.pow(" + x[i] + ", " + y + ") !== +Infinity");
	}
}

