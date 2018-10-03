/*! diff v0.0.0 - MIT license */
'use strict';


var diff = function (x) {

  //const input =[4,2,8,3,9,4,10,5,11,6];
  //const output = [4,2,6,5,6,5,6,5,6,5];

  var ans = [];
  var previous  = 0;

  for(var i = 0; i < x.length; i++)
  {
    ans.push(Math.abs(x[i] - previous))
    previous  = x[i]
  }
  return ans
}

if ( typeof module !== "undefined" ) {
  module.exports = diff;
}
