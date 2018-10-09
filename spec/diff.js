var path = require('path');
var expect = require('chai').expect;

var diff = require(path.join(__dirname, '..', './diff.js'));

describe('diff()', function () {
  'use strict';

  it("takes an array returns an array were the were the values are the absolute value of the difference of the original value and the previous value", function () {
    expect(diff([4,2,8,3,9,4,10,5,11,6])).to.eql([4,2,6,5,6,5,6,5,6,5])
    
  });
});
