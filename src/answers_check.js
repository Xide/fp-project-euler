import { expect } from 'chai';

import ex01 from './ex01';
import ex02 from './ex02';


describe("Problem 1 - Multiples of 3 and 5", () => {
  it("Should yield the correct result", () => {
    expect(ex01.sumOfMultiplesUntil(1000)).to.equals(233168);
  })
})


describe("Problem 2 - Even Fibonacci numbers", () => {
  it("Should yield the correct result", () => {
    expect(ex02.evenFibonacciNumbersUntil(4000000)).to.equals(4613732);
  })
})
