// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * White space cannot be expressed as a Unicode escape sequence consisting of six characters, namely \u plus four hexadecimal digits
 *
 * @path 07_Lexical_Conventions/7.2_White_Space/S7.2_A5_T2.js
 * @description Use VERTICAL TAB (U+000B)
 * @negative
 */

var\u000Bx;

