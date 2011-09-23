// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check For Statement for automatic semicolon insertion
 *
 * @path 07_Lexical_Conventions/7.9_Automatic_Semicolon_Insertion/S7.9_A6.1_T1.js
 * @description for( Empty two semicolons and \n)
 */

//CHECK#1
for(;;
) {
  break;
}

