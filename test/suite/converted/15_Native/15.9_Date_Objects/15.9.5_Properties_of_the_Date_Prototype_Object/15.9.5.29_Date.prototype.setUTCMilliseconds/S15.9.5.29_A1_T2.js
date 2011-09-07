// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype property "setUTCMilliseconds" has { DontEnum } attributes
 *
 * @id: S15.9.5.29_A1_T2;
 * @section: 15.9.5.29;
 * @description: Checking absence of DontDelete attribute;
 */

if (delete Date.prototype.setUTCMilliseconds  === false) {
  $ERROR('#1: The Date.prototype.setUTCMilliseconds property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('setUTCMilliseconds')) {
  $FAIL('#2: The Date.prototype.setUTCMilliseconds property has not the attributes DontDelete');
}


