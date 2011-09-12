// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * match returns array as specified in 15.10.6.2
 *
 * @section 15.5.4.10, 15.10.6.2
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.10_String.prototype.match/S15.5.4.10_A2_T15.js
 * @description Regular expression is /([\d]{5})([-\ ]?[\d]{4})?$/.
 * And regular expression object have property lastIndex = tested_string.lastIndexOf("0")
 */

var __string = "Boston, MA 02134";

var __matches=["02134"];

var __re = /([\d]{5})([-\ ]?[\d]{4})?$/g;

__re.lastIndex = __string.lastIndexOf("0");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__string.match(__re).length!== __matches.length) {
  $ERROR('#1: __string.match(__re).length=== __matches.length. Actual: '+__string.match(__re).length);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__string.match(__re)[0]!==__matches[0]) {
  $ERROR('#3: __string.match(__re)[0]===__matches[0]. Actual: '+__string.match(__re)[0]);
}
//
//////////////////////////////////////////////////////////////////////////////

