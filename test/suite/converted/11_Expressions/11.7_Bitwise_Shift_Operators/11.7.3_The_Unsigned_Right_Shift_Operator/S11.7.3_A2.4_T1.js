// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * First expression is evaluated first, and then second expression
 *
 * @path 11_Expressions/11.7_Bitwise_Shift_Operators/11.7.3_The_Unsigned_Right_Shift_Operator/S11.7.3_A2.4_T1.js
 * @description Checking with "="
 */

//CHECK#1
var x = 0; 
if ((x = 1) >>> x !== 0) {
  $ERROR('#1: var x = 0; (x = 1) >>> x === 0. Actual: ' + ((x = 1) >>> x));
}

//CHECK#2
var x = -4; 
if (x >>> (x = 1) !== 2147483646) {
  $ERROR('#2: var x = -4; x >>> (x = 1) === 2147483646. Actual: ' + (x >>> (x = 1)));
}


