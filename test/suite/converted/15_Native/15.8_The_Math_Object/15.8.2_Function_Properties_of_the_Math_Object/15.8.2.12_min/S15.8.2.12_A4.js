// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of the Math.min method is 2
 *
 * @path 15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.12_min/S15.8.2.12_A4.js
 * @description Checking if Math.min.length property is defined and equals to 2
 */

// CHECK#1
if (typeof Math.min !== "function") {
	$ERROR('#1: Math.min method is not defined');
}

// CHECK#2
if (typeof Math.min.length === "undefined") {
	$ERROR('#2: length property of Math.min method is undefined');
}

// CHECK#3
if (Math.min.length !== 2) {
	$ERROR('#3: The length property of the Math.min method is not 2');
}

