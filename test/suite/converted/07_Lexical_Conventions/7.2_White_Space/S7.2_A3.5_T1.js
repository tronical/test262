// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Single line comment can contain NO-BREAK SPACE (U+00A0)
 *
 * @section 7.2, 7.4
 * @path 07_Lexical_Conventions/7.2_White_Space/S7.2_A3.5_T1.js
 * @description Use NO-BREAK SPACE(\u00A0)
 */

// CHECK#1
eval("//\u00A0 single line \u00A0 comment \u00A0");

//CHECK#2
var x = 0;
eval("//\u00A0 single line \u00A0 comment \u00A0 x = 1;");
if (x !== 0) {
  $ERROR('#1: var x = 0; eval("//\\u00A0 single line \\u00A0 comment \\u00A0 x = 1;"); x === 0. Actual: ' + (x));
}

