// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.UTC property "length" has { ReadOnly, DontDelete, DontEnum } attributes
 *
 * @section 15.9.4.3
 * @path 15_Native/15.9_Date_Objects/15.9.4_Properties_of_the_Date_Constructor/15.9.4.3_Date.UTC/S15.9.4.3_A3_T1.js
 * @description Checking ReadOnly attribute
 */

x = Date.UTC.length;
Date.UTC.length = 1;
if (Date.UTC.length !== x) {
  $ERROR('#1: The Date.UTC.length has the attribute ReadOnly');
}


