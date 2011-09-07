// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The "length" property of the "valueOf" is 0
 *
 * @id: S15.9.5.8_A2_T1;
 * @section: 15.9.5.8;
 * @description: The "length" property of the "valueOf" is 0;
 */

if(Date.prototype.valueOf.hasOwnProperty("length") !== true){
  $ERROR('#1: The valueOf has a "length" property');
}

if(Date.prototype.valueOf.length !== 0){
  $ERROR('#2: The "length" property of the valueOf is 0');
}


