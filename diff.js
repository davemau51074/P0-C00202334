/*! diff v0.0.0 - MIT license */
'use strict';

var lastAns = 0;

var diff = function (x) {

  var ans = 0;

  if(lastAns < x)
  {
    ans = x - lastAns;
  }
  else {
    ans = lastAns - x;
  }

  lastAns = x;

  return ans;
}

if ( typeof module !== "undefined" ) {
  module.exports = diff;
}
