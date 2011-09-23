// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator -x returns -ToNumber(x)
 *
 * @path 11_Expressions/11.4_Unary_Operators/11.4.7_Unary_minus_Operator/S11.4.7_A3_T2.js
 * @description Type(x) is number primitive or Number object
 */

//CHECK#1
if (-(1) !== -1) {
  $ERROR('#1: -(1) === -1. Actual: ' + (-(1)));
}

//CHECK#2
if (-new Number(-1) !== 1) {
  $ERROR('#2: -new Number(-1) === 1. Actual: ' + (-new Number(-1)));
}

