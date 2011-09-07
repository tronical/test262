// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The pop property of Array can't be used as constructor
 *
 * @id: S15.4.4.6_A5.7;
 * @section: 15.4.4.6, 11.2.2;
 * @description: If property does not implement the internal [[Construct]] method, throw a TypeError exception;
 */

//CHECK#1

try {
  new Array.prototype.pop();
  $ERROR('#1.1: new Array.prototype.pop() throw TypeError. Actual: ' + (new Array.prototype.pop()));
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: new Array.prototype.pop() throw TypeError. Actual: ' + (e));
  }
}

