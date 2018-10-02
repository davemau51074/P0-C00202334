/*! diff v0.0.0 - MIT license */
'use strict';


var diff = function (list) 
{
  var ansList = []
  var previous = 0
  list.forEach(element => {
    ansList.push(Math.abs(element - previous))
    previous = element
  });

  return ansList
}

if ( typeof module !== "undefined" ) {
  module.exports = diff;
}