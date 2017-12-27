var R = require('ramda');
var expect = require("chai").expect;

var ex = require('./ex02')

describe("Problem 2 - Even Fibonacci numbers", function () {
  describe("fibAt", function() {
    it("Should yield the correct fibonnaci sequence for the 10 first terms", function () {
      expect(R.map(ex.fibAt, R.range(0, 10))).to.deep.equals(
        [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
      )
    })
  })
  describe("fibUntil", function() {
    it("Should not print anything when max is 0", function() {
      expect(ex.fibUntil(0)).to.deep.equals([])
    })
    it("Should not print values above the max", function() {
      expect(ex.fibUntil(64)).to.deep.equals([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
  })
})
