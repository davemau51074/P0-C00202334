/*! diff v0.0.0 - MIT license */
'use strict';


var diff = function (args) {

  //sorry
  var ls = args;
  var last = 0;

  for(var i = 0; i < ls.length; i++)
  {
    var temp = ls[i];
    ls[i] = Math.abs(ls[i]-last);
    last = temp;
  }
  return ls;

}

if ( typeof module !== "undefined" ) {
  module.exports = diff;
}