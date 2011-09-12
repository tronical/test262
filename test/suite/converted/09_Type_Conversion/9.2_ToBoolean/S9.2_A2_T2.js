// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Result of boolean conversion from null value is false
 *
 * @section 9.2, 11.4.9
 * @path 09_Type_Conversion/9.2_ToBoolean/S9.2_A2_T2.js
 * @description null convert to Boolean by implicit transformation
 */

// CHECK#1
if (!(null) !== true) {
  $ERROR('#1: !(null) === true. Actual: ' + (!(null))); 
}

