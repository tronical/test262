// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator uses ToNumber
 *
 * @section 9.6
 * @path 09_Type_Conversion/9.6_ToUint32/S9.6_A3.1_T1.js
 * @description Type(x) is Boolean
 */

// CHECK#1
if ((new Boolean(true) >>> 0) !== 1) {
  $ERROR('#1: (new Boolean(true) >>> 0) === 1. Actual: ' + ((new Boolean(true) >>> 0)));
}

// CHECK#2
if ((false >>> 0) !== 0) {
  $ERROR('#2: (false >>> 0) === 0. Actual: ' + ((false >>> 0)));
}

