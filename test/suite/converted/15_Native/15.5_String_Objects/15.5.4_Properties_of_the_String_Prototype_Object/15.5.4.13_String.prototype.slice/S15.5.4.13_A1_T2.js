// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.slice (start, end)
 *
 * @section 15.5.4.13
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.13_String.prototype.slice/S15.5.4.13_A1_T2.js
 * @description Arguments are function call and x, and instance is Boolean. x is undefined variable
 */

var __instance = new Boolean;

__instance.slice = String.prototype.slice;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.slice(function(){return true;}(),x) !== "alse") {
  $ERROR('#1: var x; __instance = new Boolean; __instance.slice = String.prototype.slice;  __instance.slice(function(){return true;}(),x) === "alse". Actual: '+__instance.slice(function(){return true;}(),x) );
}
//
//////////////////////////////////////////////////////////////////////////////

var x;

