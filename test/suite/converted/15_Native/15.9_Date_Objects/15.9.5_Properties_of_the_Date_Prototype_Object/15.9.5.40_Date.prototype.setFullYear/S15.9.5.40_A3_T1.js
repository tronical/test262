// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype.setFullYear property "length" has { ReadOnly, DontDelete, DontEnum } attributes
 *
 * @id: S15.9.5.40_A3_T1;
 * @section: 15.9.5.40;
 * @description: Checking ReadOnly attribute;
 */

x = Date.prototype.setFullYear.length;
Date.prototype.setFullYear.length = 1;
if (Date.prototype.setFullYear.length !== x) {
  $ERROR('#1: The Date.prototype.setFullYear.length has the attribute ReadOnly');
}


