var expect = require("chai").expect;

var ex01 = require('./ex01')

describe("Problem 1 - Multiples of 3 and 5", function () {
  it("Should yield 23 when the high limit is 10", function () {
    expect(ex01.sumOfMultiplesUntil(10)).to.equals(23);
  })
  // it("Should yield the correct result for the exercice", function () {
  //   expect(ex01.sumOfMultiplesUntil(1000)).to.equals(233168);
  // })
})
