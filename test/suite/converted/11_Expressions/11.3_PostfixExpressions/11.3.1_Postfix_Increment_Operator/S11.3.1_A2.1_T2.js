// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x++ uses GetValue and PutValue
 *
 * @section 11.3.1, 11.6.3
 * @path 11_Expressions/11.3_PostfixExpressions/11.3.1_Postfix_Increment_Operator/S11.3.1_A2.1_T2.js
 * @description If GetBase(x) is null, throw ReferenceError
 */

//CHECK#1
try {
  x++;
  $ERROR('#1.1: x++ throw ReferenceError. Actual: ' + (x++));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: x++ throw ReferenceError. Actual: ' + (e));  
  }
}

