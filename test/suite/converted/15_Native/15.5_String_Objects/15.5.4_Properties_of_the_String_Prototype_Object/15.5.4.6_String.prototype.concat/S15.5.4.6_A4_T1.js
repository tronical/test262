// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * when String.prototype.concat([,[...]]) is called first Call ToString, giving it the this value as its argument
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.6_String.prototype.concat/S15.5.4.6_A4_T1.js
 * @description Override toString function
 */

var __instance = {toString:function(){return "one"}};

__instance.concat = String.prototype.concat;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.concat("two",x) !== "onetwoundefined") {
  $ERROR('#1: var x; __instance = {toString:function(){return "one"}}; __instance.concat = String.prototype.concat;  __instance.concat("two",x) === "onetwoundefined". Actual: '+__instance.concat("two",x) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

var x;



