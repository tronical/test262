// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Value Property LN10 of the Math Object has the attribute DontDelete
 *
 * @id: S15.8.1.2_A3;
 * @section: 15.8.1.2;
 * @description: Checking if Math.LN10 property has the attribute DontDelete;
 * @strict_only;
 * @strict_mode_negative;
 */

// CHECK#1
if (delete Math.LN10 === true) {
  $ERROR('#1: Value Property LN10 of the Math Object hasn\'t attribute DontDelete: \'Math.LN10 === true\'');
}


