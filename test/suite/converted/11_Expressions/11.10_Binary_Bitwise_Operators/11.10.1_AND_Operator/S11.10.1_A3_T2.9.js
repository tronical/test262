// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x & y returns ToNumber(x) & ToNumber(y)
 *
 * @path 11_Expressions/11.10_Binary_Bitwise_Operators/11.10.1_AND_Operator/S11.10.1_A3_T2.9.js
 * @description Type(x) is different from Type(y) and both types vary between Boolean (primitive or object) and Null
 */

//CHECK#1
if ((true & null) !== 0) {
  $ERROR('#1: (true & null) === 0. Actual: ' + ((true & null)));
}

//CHECK#2
if ((null & true) !== 0) {
  $ERROR('#2: (null & true) === 0. Actual: ' + ((null & true)));
}

//CHECK#3
if ((new Boolean(true) & null) !== 0) {
  $ERROR('#3: (new Boolean(true) & null) === 0. Actual: ' + ((new Boolean(true) & null)));
}

//CHECK#4
if ((null & new Boolean(true)) !== 0) {
  $ERROR('#4: (null & new Boolean(true)) === 0. Actual: ' + ((null & new Boolean(true))));
}

