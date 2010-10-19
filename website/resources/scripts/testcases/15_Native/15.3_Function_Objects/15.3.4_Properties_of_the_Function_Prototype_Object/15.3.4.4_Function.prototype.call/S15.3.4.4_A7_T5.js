// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.4_A7_T5;
* @section: 15.3.4.4;
* @assertion: Function.prototype.call can't be used as [[create]] caller;
* @description: Checking if creating "new Function("this.p1=1").call" fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.4_A7_T5",

path: "15.3.4.4",

description: "Checking if creating \"new Function(\"this.p1=1\").call\" fails",

test: function testcase() {
   try {
  var FACTORY = Function("this.p1=1").call;
  var obj = new FACTORY();
  $ERROR('#1: Function.prototype.call can\'t be used as [[create]] caller');
} catch (e) {
  if (!(e instanceof TypeError)) {
  	$ERROR('#1.1: Function.prototype.call can\'t be used as [[create]] caller');
  }
}

 }
});

