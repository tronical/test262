// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * When the production "do Statement while ( Expression )" is evaluated, then (normal, V, empty) is returned
 *
 * @section 12.6.1
 * @path 12_Statement/12.6_Iteration_Statements/12.6.1_The_do_while_Statement/S12.6.1_A3.js
 * @description Using eval "eval("do __in__do=1; while (false)")"
 */

__evaluated = eval("do __in__do=1; while (false)");

//////////////////////////////////////////////////////////////////////////////
//CHECK#
if (__in__do !== 1) {
	$ERROR('#1: __in__do === 1. Actual:  __in__do ==='+ __in__do  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__evaluated !== 1) {
	$ERROR('#2: __evaluated === 1. Actual:  __evaluated ==='+ __evaluated  );
}
//
//////////////////////////////////////////////////////////////////////////////

