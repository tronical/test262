// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.UTC property "length" has { ReadOnly, DontDelete, DontEnum } attributes
 *
 * @path 15_Native/15.9_Date_Objects/15.9.4_Properties_of_the_Date_Constructor/15.9.4.3_Date.UTC/S15.9.4.3_A3_T2.js
 * @description Checking DontDelete attribute
 */

if (delete Date.UTC.length  !== false) {
  $ERROR('#1: The Date.UTC.length property has the attributes DontDelete');
}

if (!Date.UTC.hasOwnProperty('length')) {
  $FAIL('#2: The Date.UTC.length property has the attributes DontDelete');
}


