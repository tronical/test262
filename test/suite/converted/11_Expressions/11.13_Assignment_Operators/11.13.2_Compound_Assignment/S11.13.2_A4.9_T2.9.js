// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The production x &= y is the same as x = x & y
 *
 * @section 11.13.2, 11.10.1
 * @path 11_Expressions/11.13_Assignment_Operators/11.13.2_Compound_Assignment/S11.13.2_A4.9_T2.9.js
 * @description Type(x) is different from Type(y) and both types vary between Boolean (primitive or object) and Null
 */

//CHECK#1
x = true;
x &= null;
if (x !== 0) {
  $ERROR('#1: x = true; x &= null; x === 0. Actual: ' + (x));
}

//CHECK#2
x = null;
x &= true;
if (x !== 0) {
  $ERROR('#2: x = null; x &= true; x === 0. Actual: ' + (x));
}

//CHECK#3
x = new Boolean(true);
x &= null;
if (x !== 0) {
  $ERROR('#3: x = new Boolean(true); x &= null; x === 0. Actual: ' + (x));
}

//CHECK#4
x = null;
x &= new Boolean(true);
if (x !== 0) {
  $ERROR('#4: x = null; x &= new Boolean(true); x === 0. Actual: ' + (x));
}

