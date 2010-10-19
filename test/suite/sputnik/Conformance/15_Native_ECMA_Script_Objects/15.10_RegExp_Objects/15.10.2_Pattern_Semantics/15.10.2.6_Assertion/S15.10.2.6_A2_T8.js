// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.6_A2_T8;
* @section: 15.10.2.6;
* @assertion: The production Assertion :: ^ evaluates by returning an internal AssertionTester closure that takes a State argument x and performs the ...;
* @description: Execute /^xxx/.test("yyyyy") and check results;
*/

__executed = /^xxx/.test("yyyyy");

//CHECK#1
if (__executed) {
	$ERROR('#1: /^xxx/.test("yyyyy") === false');
}

