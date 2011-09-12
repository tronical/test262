// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Number.POSITIVE_INFINITY is +Infinity
 *
 * @section 15.7.3.6
 * @path 15_Native/15.7_Number_Objects/15.7.3_Properties_of_Number_Constructor/15.7.3.6_Number.POSITIVE_INFINITY/S15.7.3.6_A1.js
 * @description Checking sign and finiteness of Number.POSITIVE_INFINITY
 */

// CHECK#1
if (isFinite(Number.POSITIVE_INFINITY) !== false) {
  $ERROR('#1: Number.POSITIVE_INFINITY === Not-a-Finite');
} else {
  if ((Number.POSITIVE_INFINITY > 0) !== true) {
    $ERROR('#1: Number.POSITIVE_INFINITY === +Infinity');
  }
}

