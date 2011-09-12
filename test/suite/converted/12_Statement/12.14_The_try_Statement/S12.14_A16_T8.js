// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * TryStatement: "try Block Catch" or "try Block Finally" or "try Block Catch Finally"
 *
 * @section 12.14, 12.1
 * @path 12_Statement/12.14_The_try_Statement/S12.14_A16_T8.js
 * @description Block: "{ StatementList }". Catch: "catch (Identifier ) Block". Checking if execution of "try{} catch(){finally{}" fails
 * @negative
 */

// CHECK#1
try{}
catch(){
finally{}



