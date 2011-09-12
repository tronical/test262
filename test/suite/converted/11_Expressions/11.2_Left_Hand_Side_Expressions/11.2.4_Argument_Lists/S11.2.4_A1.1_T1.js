// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Arguments : ()
 *
 * @section 11.2.4, 11.2.3, 10.1.8
 * @path 11_Expressions/11.2_Left_Hand_Side_Expressions/11.2.4_Argument_Lists/S11.2.4_A1.1_T1.js
 * @description Function is declared with no FormalParameterList
 */

function f_arg() {
  return arguments;
}

//CHECK#1
if (f_arg().length !== 0) {
  $ERROR('#1: function f_arg() {return arguments;} f_arg().length === 0. Actual: ' + (f_arg().length));
}

//CHECK#2
if (f_arg()[0] !== undefined) {
  $ERROR('#2: function f_arg() {return arguments;} f_arg()[0] === undefined. Actual: ' + (f_arg()[0]));
}

