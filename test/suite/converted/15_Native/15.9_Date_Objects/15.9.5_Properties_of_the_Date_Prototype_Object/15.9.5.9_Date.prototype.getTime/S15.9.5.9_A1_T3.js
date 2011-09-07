// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype property "getTime" has { DontEnum } attributes
 *
 * @id: S15.9.5.9_A1_T3;
 * @section: 15.9.5.9;
 * @description: Checking DontEnum attribute;
 */

if (Date.prototype.propertyIsEnumerable('getTime')) {
  $ERROR('#1: The Date.prototype.getTime property has the attribute DontEnum');
}

for(x in Date.prototype) {
  if(x === "getTime") {
    $ERROR('#2: The Date.prototype.getTime has the attribute DontEnum');
  }
}


