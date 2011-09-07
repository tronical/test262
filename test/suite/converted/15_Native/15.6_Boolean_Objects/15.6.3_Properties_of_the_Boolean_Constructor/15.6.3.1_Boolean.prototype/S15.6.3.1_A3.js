// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Boolean.prototype has the attribute DontDelete
 *
 * @id: S15.6.3.1_A3;
 * @section: 15.6.3.1;
 * @description: Checking if deleting the Boolean.prototype property fails;
 */

// CHECK#1
if (delete Boolean.prototype !== false) {
  $ERROR('#1: Boolean.prototype has the attribute DontDelete');
}

