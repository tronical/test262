// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * A TypeError exception is thrown if the this value is not an object for which the value of the internal [[Class]] property is "RegExp"
 *
 * @path 15_Native/15.10_RegExp_Objects/15.10.6_Properties_of_the_RegExp_Prototype_Object/15.10.6.3_RegExp.prototype.test/S15.10.6.3_A2_T8.js
 * @description The tested object is "."
 */

__instance = ".";

Object.prototype.test = RegExp.prototype.test;

//CHECK#1
try {
  $ERROR('#1.1: __instance = "."; Object.prototype.test = RegExp.prototype.test; __instance.test("message to investigate"). Actual: ' + (__instance.test("message to investigate")));
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: __instance = "."; Object.prototype.test = RegExp.prototype.test; __instance.test("message to investigate"). Actual: ' + (e));
  }
}

