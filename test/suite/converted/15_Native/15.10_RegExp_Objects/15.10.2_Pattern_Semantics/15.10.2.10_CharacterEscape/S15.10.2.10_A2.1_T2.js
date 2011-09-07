// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * CharacterEscape :: c ControlLetter
 *
 * @id: S15.10.2.10_A2.1_T2;
 * @section: 15.10.2.10;
 * @description: ControlLetter :: a - z;
 */

//CHECK#0061-007A
var result = true; 
for (alpha = 0x0061; alpha <= 0x007A; alpha++) {
  str = String.fromCharCode(alpha % 32);
  arr = (new RegExp("\\c" + String.fromCharCode(alpha))).exec(str);  
  if ((arr === null) || (arr[0] !== str)) {
    result = false;
  }
}

if (result !== true) {
  $ERROR('#1: CharacterEscape :: c a - z');
}    

