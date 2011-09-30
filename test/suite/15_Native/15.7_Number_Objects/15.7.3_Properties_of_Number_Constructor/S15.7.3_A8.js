// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Number constructor has length property whose value is 1
 *
 * @path 15_Native/15.7_Number_Objects/15.7.3_Properties_of_Number_Constructor/S15.7.3_A8.js
 * @description Checking Number.length property
 */

//CHECK#1
if (!Number.hasOwnProperty("length")){
  $ERROR('#1: Number constructor has length property');
}

//CHECK#2
if (Number.length !== 1) {
  $ERROR('#2: Number constructor length property value is 1');
}
