// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Punctuator cannot be expressed as a Unicode escape sequence consisting of six characters, namely \u plus four hexadecimal digits
 *
 * @path 07_Lexical_Conventions/7.7_Punctuators/S7.7_A2_T7.js
 * @description Try to use + as a Unicode \u002B
 * @negative
 */

1\u002B2;

