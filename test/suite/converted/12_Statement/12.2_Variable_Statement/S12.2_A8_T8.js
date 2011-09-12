// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Only AssignmentExpression is admitted when variable is initialized
 *
 * @section 12.2
 * @path 12_Statement/12.2_Variable_Statement/S12.2_A8_T8.js
 * @description Checking if execution of "var x in __arr" fails
 * @negative
 */

__arr = [];

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
var x in __arr;
//
//////////////////////////////////////////////////////////////////////////////


