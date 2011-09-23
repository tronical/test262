// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * First expression is evaluated first, and then second expression
 *
 * @path 11_Expressions/11.8_Relational_Operators/11.8.4_The_Grater_than_or_equal_Operator/S11.8.4_A2.4_T3.js
 * @description Checking with undeclarated variables
 */

//CHECK#1
try {
  x >= (x = 1);
  $ERROR('#1.1: x >= (x = 1) throw ReferenceError. Actual: ' + (x >= (x = 1)));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: x >= (x = 1) throw ReferenceError. Actual: ' + (e));  
  }
}

//CHECK#2
if ((y = 1) >= y !== true) {
  $ERROR('#2: (y = 1) >= y === true');
}


