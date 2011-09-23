// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * [[Get]] from not an inherited property
 *
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.5_Array_prototype_join/S15.4.4.5_A5_T1.js
 * @description [[Prototype]] of Array instance is Array.prototype, [[Prototype] of Array.prototype is Object.prototype
 */

//CHECK#1
Array.prototype[1] = 1;
var x = [0];
x.length = 2;
if (x.join() !== "0,1") {  
  $ERROR('#1: Array.prototype[1] = 1; x = [0]; x.length = 2; x.join() === "0,1". Actual: ' + (x.join()));    
}

//CHECK#2
Object.prototype[1] = 1;
Object.prototype.length = 2;
Object.prototype.join = Array.prototype.join;
x = {0:0};
if (x.join() !== "0,1") {  
  $ERROR('#2: Object.prototype[1] = 1; Object.prototype.length = 2; Object.prototype.join = Array.prototype.join; x = {0:0}; x.join() === "0,1". Actual: ' + (x.join()));    
}

