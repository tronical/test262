// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.charAt(pos)
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.4_String.prototype.charAt/S15.5.4.4_A1_T4.js
 * @description Call charAt() function without argument of string object
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToInteger() evaluates to 0 charAt() evaluates to charAt(0)
if ("lego".charAt() !== "l") {
  $ERROR('#1: "lego".charAt() === "l". Actual: "lego".charAt() ==='+("lego".charAt()) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

