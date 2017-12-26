var R = require('ramda');
var expect = require("chai").expect;

var ex = require('./ex02')

describe("Problem 2 - Even Fibonacci numbers", function () {
  it("Should yield the correct fibonnaci sequence for the 10 first terms", function () {
    expect(R.map(ex.fibAt, R.range(0, 10))).to.deep.equals(
      [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    )
  })
  // it("Should yield the correct result for the exercice", function () {
  //   expect(ex.evenFibonacciNumbersUntil(4000000)).to.equals(4613732);
  // })
})
