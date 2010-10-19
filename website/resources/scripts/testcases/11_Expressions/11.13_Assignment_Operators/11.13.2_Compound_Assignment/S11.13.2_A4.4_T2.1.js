// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.13.2_A4.4_T2.1;
 * @section: 11.13.2, 11.6.1;
 * @assertion: The production x += y is the same as x = x + y; 
 * @description: Type(x) is different from Type(y) and both types vary between Number (primitive or object) and Boolean (primitive and object);
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.13.2_A4.4_T2.1",

path: "11.13.2, 11.6.1",

description: "Type(x) is different from Type(y) and both types vary between Number (primitive or object) and Boolean (primitive and object)",

test: function testcase() {
   //CHECK#1
x = true;
x += 1;
if (x !== 2) {
  $ERROR('#1: x = true; x += 1; x === 2. Actual: ' + (x));
}

//CHECK#2
x = 1;
x += true;
if (x !== 2) {
  $ERROR('#2: x = 1; x += true; x === 2. Actual: ' + (x));
}

//CHECK#3
x = new Boolean(true);
x += 1;
if (x !== 2) {
  $ERROR('#3: x = new Boolean(true); x += 1; x === 2. Actual: ' + (x));
}

//CHECK#4
x = 1;
x += new Boolean(true);
if (x !== 2) {
  $ERROR('#4: x = 1; x += new Boolean(true); x === 2. Actual: ' + (x));
}

//CHECK#5
x = true;
x += new Number(1);
if (x !== 2) {
  $ERROR('#5: x = true; x += new Number(1); x === 2. Actual: ' + (x));
}

//CHECK#6
x = new Number(1);
x += true;
if (x !== 2) {
  $ERROR('#6: x = new Number(1); x += true; x === 2. Actual: ' + (x));
}

//CHECK#7
x = new Boolean(true);
x += new Number(1);
if (x !== 2) {
  $ERROR('#7: x = new Boolean(true); x += new Number(1); x === 2. Actual: ' + (x));
}

//CHECK#8
x = new Number(1);
x += new Boolean(true);
if (x !== 2) {
  $ERROR('#8: x = new Number(1); x += new Boolean(true); x === 2. Actual: ' + (x));
}

 }
});

