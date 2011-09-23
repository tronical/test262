// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Equivalent to the expression RegExp.prototype.exec(string) != null
 *
 * @path 15_Native/15.10_RegExp_Objects/15.10.6_Properties_of_the_RegExp_Prototype_Object/15.10.6.3_RegExp.prototype.test/S15.10.6.3_A1_T4.js
 * @description RegExp is /a[a-z]{2,4}?/ and tested string is {toString:function(){return "abcdefghi";}}
 */

var __string = {toString:function(){return "abcdefghi";}};
__re = /a[a-z]{2,4}?/;

//CHECK#0
if (__re.test(__string) !== (__re.exec(__string) !== null)) {
	$ERROR('#0: var __string = {toString:function(){return "abcdefghi";}}; __re = /a[a-z]{2,4}?/; __re.test(__string) === (__re.exec(__string) !== null)');
}


