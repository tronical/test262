// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of toLocaleString is 0
 *
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.3_Array_prototype_toLocaleString/S15.4.4.3_A4.4.js
 * @description toLocaleString.length === 1
 */

//CHECK#1
if (Array.prototype.toLocaleString.length !== 0) {
  $ERROR('#1: Array.prototype.toLocaleString.length === 0. Actual: ' + (Array.prototype.toLocaleString.length));
}


