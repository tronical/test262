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
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-621.js
 * @description ES5 Attributes - all attributes in String.prototype.trim are correct
 */


function testcase() {
        var desc = Object.getOwnPropertyDescriptor(String.prototype, "trim");

        var propertyAreCorrect = (desc.writable === true && desc.enumerable === false && desc.configurable === true);

        var temp = String.prototype.trim;

        try {
            String.prototype.trim = "2010";

            var isWritable = (String.prototype.trim === "2010");

            var isEnumerable = false;

            for (var prop in String.prototype) {
                if (prop === "trim") {
                    isEnumerable = true;
                }
            }

            delete String.prototype.trim;

            var isConfigurable = !String.prototype.hasOwnProperty("trim");

            return propertyAreCorrect && isWritable && !isEnumerable && isConfigurable;
        } finally {
            Object.defineProperty(String.prototype, "trim", {
                value: temp,
                writable: true,
                enumerable: false,
                configurable: true
            });
        }
    }
runTestCase(testcase);
