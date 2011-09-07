/// Copyright (c) 2009 Microsoft Corporation 
/// 
/// Redistribution and use in source and binary forms, with or without modification, are permitted provided
/// that the following conditions are met: 
///    * Redistributions of source code must retain the above copyright notice, this list of conditions and
///      the following disclaimer. 
///    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and 
///      the following disclaimer in the documentation and/or other materials provided with the distribution.  
///    * Neither the name of Microsoft nor the names of its contributors may be used to
///      endorse or promote products derived from this software without specific prior written permission.
/// 
/// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
/// IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
/// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
/// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
/// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
/// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
/// OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
/// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/**
 * @id: 15.2.3.7-6-a-292;
 * @path: TestCases/chapter15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-292.js;
 * @description: Object.defineProperties - 'O' is an Arguments object, 'P' is an array index named accessor property of 'O' but not defined in [[ParameterMap]] of 'O', and 'desc' is accessor descriptor, test updating multiple attribute values of 'P' (10.6 [[DefineOwnProperty]] step 3);
 * @precondition: (fnExists(Object.defineProperties) && fnExists(Object.defineProperty));
 */

assertTrue((function testcase() {

        var arg;

        (function fun() {
            arg = arguments;
        }(0, 1, 2));

        function get_func1() {
            return 10;
        }

        Object.defineProperty(arg, "0", {
            get: get_func1,
            enumerable: true,
            configurable: true
        });

        function get_func2() {
            return 20;
        }

        Object.defineProperties(arg, {
            "0": {
                get: get_func2,
                enumerable: false,
                configurable: false
            }
        });

        return accessorPropertyAttributesAreCorrect(arg, "0", get_func2, undefined, undefined, false, false);
    }).call(this));

