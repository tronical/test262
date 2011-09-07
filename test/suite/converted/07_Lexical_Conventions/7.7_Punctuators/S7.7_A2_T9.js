// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Punctuator cannot be expressed as a Unicode escape sequence consisting of six characters, namely \u plus four hexadecimal digits
 *
 * @id: S7.7_A2_T9;
 * @section: 7.7;
 * @description: Try to use * as a Unicode \u002A;
 * @negative;
 */

1\u002A2;

