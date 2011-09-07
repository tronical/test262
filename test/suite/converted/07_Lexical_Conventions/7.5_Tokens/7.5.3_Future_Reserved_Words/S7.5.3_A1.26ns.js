// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The "static" token can be used as identifier in non-strict code
 *
 * @id: S7.5.3_A1.26;
 * @section: 7.5.3;
 * @description: Checking if execution of "static=1" succeeds in non-strict code;
 */

new Function('static = 1');

