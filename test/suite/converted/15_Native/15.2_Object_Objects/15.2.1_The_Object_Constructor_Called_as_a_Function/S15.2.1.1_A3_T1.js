// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Since calling Object as a function is identical to calling a function, list of arguments bracketing is allowed
 *
 * @path 15_Native/15.2_Object_Objects/15.2.1_The_Object_Constructor_Called_as_a_Function/S15.2.1.1_A3_T1.js
 * @description Creating an object with "Object(1,2,3)"
 */

var obj = Object(1,2,3);

//CHECK#1
if (obj.constructor !== Number) {
  $ERROR('#1: Since Object as a function calling is the same as function calling list of arguments can appears in braces;');
}

//CHECK#2
if (typeof obj !== "object") {
  $ERROR('#2: Since Object as a function calling is the same as function calling list of arguments can appears in braces;');
}

//CHECK#3
if ((obj != 1)||(obj === 1)) {
  $ERROR('3#: Since Object as a function calling is the same as function calling list of arguments can appears in braces;');
}

