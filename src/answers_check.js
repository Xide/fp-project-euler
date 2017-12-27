var expect = require('chai').expect;

var ex01 = require('./ex01')
var ex02 = require('./ex02')

describe("Problem 1 - Multiples of 3 and 5", function () {
  it("Should yield the correct result", function () {
    expect(ex01.sumOfMultiplesUntil(1000)).to.equals(233168);
  })
})


describe("Problem 2 - Even Fibonacci numbers", function () {
  it("Should yield the correct result", function () {
    expect(ex02.evenFibonacciNumbersUntil(4000000)).to.equals(4613732);
  })
})
