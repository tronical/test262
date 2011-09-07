// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator "instanceof" uses GetValue
 *
 * @id: S11.8.6_A2.1_T2;
 * @section: 11.8.6;
 * @description: If GetBase(RelationalExpression) is null, throw ReferenceError;
 */

//CHECK#1
try {
  object instanceof Object;
  $ERROR('#1.1: object instanceof Object throw ReferenceError. Actual: ' + (object instanceof Object));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: object instanceof Object throw ReferenceError. Actual: ' + (e));  
  }
}

