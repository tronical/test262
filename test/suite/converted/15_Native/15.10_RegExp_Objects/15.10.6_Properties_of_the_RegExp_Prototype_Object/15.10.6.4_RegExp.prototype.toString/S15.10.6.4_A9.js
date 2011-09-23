// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The RegExp.prototype.toString.length property has the attribute DontDelete
 *
 * @path 15_Native/15.10_RegExp_Objects/15.10.6_Properties_of_the_RegExp_Prototype_Object/15.10.6.4_RegExp.prototype.toString/S15.10.6.4_A9.js
 * @description Checking if deleting the RegExp.prototype.toString.length property fails
 */

//CHECK#0
if ((RegExp.prototype.toString.hasOwnProperty('length') !== true)) {
	$FAIL('#0: RegExp.prototype.toString.hasOwnProperty(\'length\') === true');
}

//CHECK#1
if (delete RegExp.prototype.toString.length !== false) {
	$ERROR('#1: delete RegExp.prototype.toString.length === false');
}

//CHECK#2
if (RegExp.prototype.toString.hasOwnProperty('length') !== true) {
	$ERROR('#2: delete RegExp.prototype.toString.length; RegExp.prototype.toString.hasOwnProperty(\'length\') === true');
}


