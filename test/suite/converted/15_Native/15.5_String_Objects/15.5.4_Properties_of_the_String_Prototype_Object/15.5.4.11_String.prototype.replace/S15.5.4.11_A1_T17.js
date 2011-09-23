// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.replace (searchValue, replaceValue)
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.11_String.prototype.replace/S15.5.4.11_A1_T17.js
 * @description Instance is String object, searchValue is regular expression
 */

var __re = new RegExp(x,"g");

var __instance = String("asdf");

var __str = "1";
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.replace(__re, __str) !== "1a1s1d1f1") {
  $ERROR('#1: var x; var __re = new RegExp(x,"g"); __instance = String("asdf"); __str = "1"; __instance.replace(__re, __str) === "1a1s1d1f1". Actual: '+__instance.replace(__re, __str) );
}
//
//////////////////////////////////////////////////////////////////////////////

var x;

