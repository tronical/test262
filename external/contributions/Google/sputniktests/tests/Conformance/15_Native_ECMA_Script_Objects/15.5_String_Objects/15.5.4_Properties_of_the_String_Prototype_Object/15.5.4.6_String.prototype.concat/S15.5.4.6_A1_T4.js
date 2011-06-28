// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.6_A1_T4;
* @section: 15.5.4.6;
* @assertion: String.prototype.concat([,[...]]);
* @description: Call concat([,[...]]) function without argument of string object;
*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString() evaluates to "" concat() evaluates to concat("")
if ("lego".concat() !== "lego") {
  $ERROR('#1: "lego".concat() === "lego". Actual: '+("lego".concat()) ); 
}
//
//////////////////////////////////////////////////////////////////////////////
