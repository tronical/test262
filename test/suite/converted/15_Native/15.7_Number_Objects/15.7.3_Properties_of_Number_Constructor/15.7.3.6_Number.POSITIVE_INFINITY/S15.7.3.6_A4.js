// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Number.POSITIVE_INFINITY has the attribute DontEnum
 *
 * @id: S15.7.3.6_A4;
 * @section: 15.7.3.6;
 * @description: Checking if enumerating Number.POSITIVE_INFINITY fails;
 */

//CHECK#1
for(var x in Number) {
  if(x === "POSITIVE_INFINITY") {
    $ERROR('#1: Number.POSITIVE_INFINITY has the attribute DontEnum');
  }
}

if (Number.propertyIsEnumerable('POSITIVE_INFINITY')) {
  $ERROR('#2: Number.POSITIVE_INFINITY has the attribute DontEnum');
}

