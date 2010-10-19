// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/** * @name: S7.3_A3.3_T2; * @section: 7.3, 7.4; * @assertion: Single line comments can not contain LINE SEPARATOR (U+2028) inside; * @description: Insert LINE SEPARATOR (\u2028) into begin of single line comment; * @negative */
// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.3_A3.3_T2",

path: "7.3, 7.4",

description: "Insert LINE SEPARATOR (\\u2028) into begin of single line comment",

test: function testcase() {
  try {
     (function() {
         // CHECK#1eval("//\u2028 single line comment");
 })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

