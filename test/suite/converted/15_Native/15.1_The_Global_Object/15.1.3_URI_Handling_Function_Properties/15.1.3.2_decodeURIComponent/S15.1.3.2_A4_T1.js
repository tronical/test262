// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * URI tests
 *
 * @section 15.1.3.2
 * @path 15_Native/15.1_The_Global_Object/15.1.3_URI_Handling_Function_Properties/15.1.3.2_decodeURIComponent/S15.1.3.2_A4_T1.js
 * @description Checking ENGLISH ALPHABET
 */

//CHECK#1
if (decodeURIComponent("http://unipro.ru/0123456789") !== "http://unipro.ru/0123456789") {
  $ERROR('#1: http://unipro.ru/0123456789');
}

//CHECK#2
if (decodeURIComponent("%41%42%43%44%45%46%47%48%49%4A%4B%4C%4D%4E%4F%50%51%52%53%54%55%56%57%58%59%5A") !== "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
  $ERROR('#2: ABCDEFGHIJKLMNOPQRSTUVWXYZ');
}

//CHECK#3
if (decodeURIComponent("%61%62%63%64%65%66%67%68%69%6A%6B%6C%6D%6E%6F%70%71%72%73%74%75%76%77%78%79%7A") !== "abcdefghijklmnopqrstuvwxyz") {
  $ERROR('#3: abcdefghijklmnopqrstuvwxyz');
}

