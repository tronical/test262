// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check ToUint32(length) for non Array objects
 *
 * @section 15.4.4.9
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.9_Array_prototype_shift/S15.4.4.9_A3_T3.js
 * @description length is arbitrarily
 */

var obj = {};
obj.shift = Array.prototype.shift;
obj[0] = "x";
obj[1] = "y";
obj.length = -4294967294;

//CHECK#1
var shift = obj.shift();
if (shift !== "x") {
  $ERROR('#1: var obj = {}; obj.shift = Array.prototype.shift; obj[0] = "x"; obj[1] = "y"; obj.length = -4294967294; obj.shift() === "x". Actual: ' + (shift));
}

//CHECK#2
if (obj.length !== 1) {
  $ERROR('#2: var obj = {}; obj.shift = Array.prototype.shift; obj[0] = "x"; obj[1] = "y"; obj.length = -4294967294; obj.shift(); obj.length === 1. Actual: ' + (obj.length));
}

//CHECK#3
if (obj[0] !== "y") {
   $ERROR('#3: var obj = {}; obj.shift = Array.prototype.shift; obj[0] = "x"; obj[1] = "y"; obj.length = -4294967294; obj.shift(); obj[0] === "y". Actual: ' + (obj[0]));
}

//CHECK#4
if (obj[1] !== undefined) {
   $ERROR('#4: var obj = {}; obj.shift = Array.prototype.shift; obj[0] = "x" obj[1] = "y"; obj.length = -4294967294; obj.shift(); obj[1] === undefined. Actual: ' + (obj[1]));
}    

