var path = require('path');
var expect = require('chai').expect;

var diff = require(path.join(__dirname, '..', './diff.js'));

describe('diff()', function () {
  'use strict';

  it('exists', function () {
    expect(diff).to.be.a('function');

  });

  it('Input 4 Output 2', function () {
    expect(diff(4)).to.equal(4);
  });

  it('Input 2 Output 2', function () {
    expect(diff(2)).to.equal(2);
  });

  it('Input 8 Output 6', function () {
    expect(diff(8)).to.equal(6);
  });

  it('Input 3 Output 5', function () {
    expect(diff(3)).to.equal(5);
  });

  it('Input 9 Output 6', function () {
    expect(diff(9)).to.equal(6);
  });

  it('Input 4 Output 5', function () {
    expect(diff(4)).to.equal(5);
  });

  it('Input 10 Output 6', function () {
    expect(diff(10)).to.equal(6);
  });

  it('Input 5 Output 5', function () {
    expect(diff(5)).to.equal(5);
  });

  it('Input 11 Output 6', function () {
    expect(diff(11)).to.equal(6);
  });

  it('Input 6 Output 5', function () {
    expect(diff(6)).to.equal(5);
  });

  // Add more assertions here
});
