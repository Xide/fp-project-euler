import { expect } from 'chai';

import ex01 from './ex01';
import ex02 from './ex02';
import ex03 from './ex03';
import ex04 from './ex04';

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

describe("Problem 3 - Largest prime factors", () => {
  it("Should yield the correct result", () => {
    expect(ex03.solve()).to.equals(6857);
  })
})

describe("Problem 4 - Largest palindroms product", () => {
  it("Should yield the correct result", () => {
    expect(ex04.solve()).to.equals(906609);
  })
})
