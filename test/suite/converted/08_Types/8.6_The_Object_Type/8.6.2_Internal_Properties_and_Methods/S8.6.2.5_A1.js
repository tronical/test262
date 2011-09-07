// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * When the [[Delete]] method of O is called with property name P,
 * and If the property has the DontDelete attribute, return false
 *
 * @id: S8.6.2.5_A1;
 * @section: 8.6.2.5, 15.8, 11.4.1;
 * @description: Try to delete Math.E, that has the DontDelete attribute;
 * @strict_only;
 * @strict_mode_negative;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (delete Math.E !== false){
  $ERROR('#1: delete Math.E === false. Actual: ' + (delete Math.E));
};
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (Math.E === undefined){
  $ERROR('#2: delete Math.E; Math.E !== undefined');
};
//
//////////////////////////////////////////////////////////////////////////////


