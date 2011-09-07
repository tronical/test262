// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * RegularExpressionChar :: LineTerminator is incorrect
 *
 * @id: S7.8.5_A2.3_T4;
 * @section: 7.8.5;
 * @description: Carriage Return, with eval;
 */

//CHECK#1
try {
   eval("/a\u000D/").source;
   $ERROR('#1.1: RegularExpressionChar :: Carriage Retur is incorrect. Actual: ' + (eval("/a\u000D/").source)); 
}
catch (e) {
  if ((e instanceof SyntaxError) !== true) {
     $ERROR('#1.2: RegularExpressionChar :: Carriage Retur is incorrect. Actual: ' + (e));
  }
}     

