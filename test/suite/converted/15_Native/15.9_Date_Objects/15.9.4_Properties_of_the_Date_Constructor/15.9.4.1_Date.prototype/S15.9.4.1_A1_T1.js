// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date property "prototype" has { DontEnum, DontDelete, ReadOnly } attributes
 *
 * @id: S15.9.4.1_A1_T1;
 * @section: 15.9.4.1;
 * @description: Checking ReadOnly attribute;
 */

x = Date.prototype;
Date.prototype = 1;
if (Date.prototype !== x) {
  $ERROR('#1: The Date.prototype has the attribute ReadOnly');
}


