// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * White space cannot be expressed as a Unicode escape sequence consisting of six characters, namely \u plus four hexadecimal digits
 *
 * @id: S7.2_A5_T3;
 * @section: 7.2;
 * @description: Use FORM FEED (U+000C);
 * @negative;
 */

var\u000Cx;

