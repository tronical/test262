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
 * @id: 15.2.3.6-4-599;
 * @path: TestCases/chapter15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-599.js;
 * @description: ES5 Attributes - all attributes in Object.getOwnPropertyDescriptor are correct;
 * @precondition: (fnExists(Object.defineProperty) && fnExists(Object.getOwnPropertyDescriptor));
 */

assertTrue((function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Object, "getOwnPropertyDescriptor");

        var propertyAreCorrect = (desc.writable === true && desc.enumerable === false && desc.configurable === true);

        var temp = Object.getOwnPropertyDescriptor;

        try {
            Object.getOwnPropertyDescriptor = "2010";

            var isWritable = (Object.getOwnPropertyDescriptor === "2010");

            var isEnumerable = false;

            for (var prop in Object) {
                if (prop === "getOwnPropertyDescriptor") {
                    isEnumerable = true;
                }
            }

            delete Object.getOwnPropertyDescriptor;

            var isConfigurable = !Object.hasOwnProperty("getOwnPropertyDescriptor");

            return propertyAreCorrect && isWritable && !isEnumerable && isConfigurable;
        } finally {
            Object.defineProperty(Object, "getOwnPropertyDescriptor", {
                value: temp,
                writable: true,
                enumerable: false,
                configurable: true
            });
        }
    }).call(this));

