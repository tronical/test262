// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * No matter how control leaves the embedded 'Statement',
 * the scope chain is always restored to its former state
 *
 * @path 12_Statement/12.10_The_with_Statement/S12.10_A3.9_T1.js
 * @description Using "for-in" statement within "with" statement, leading to normal completion
 * @onlyStrict
 * @negative
 */

this.p1 = 1;

var result = "result";

var myObj = {
    p1: 'a', 
    value: 'myObj_value',
    valueOf : function(){return 'obj_valueOf';}
}

with(myObj){
    for(var prop in myObj){
        p1 = 'x1';
    }
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(p1 !== 1){
  $ERROR('#1: p1 === 1. Actual:  p1 ==='+ p1  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(myObj.p1 !== "x1"){
  $ERROR('#2: myObj.p1 === "x1". Actual:  myObj.p1 ==='+ myObj.p1  );
}
//
//////////////////////////////////////////////////////////////////////////////



