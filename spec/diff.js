var path = require('path');
var expect = require('chai').expect;

var diff = require(path.join(__dirname, '..', './diff.js'));

describe('diff()', function () {
  'use strict';

  it('exists', function () {
    expect(diff).to.be.a('function');

  });

  it('test', function () {
    expect(diff([4, 2, 8, 3, 9, 4, 10, 5, 11, 6])).to.deep.equal([4, 2, 6, 5, 6, 5, 6, 5, 6, 5]);
  });

  // Add more assertions here
});
