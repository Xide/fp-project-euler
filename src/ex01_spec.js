import { expect } from 'chai';

import ex01 from './ex01'


describe("Problem 1 - Multiples of 3 and 5", () => {
  it("Should yield 23 when the high limit is 10", () => {
    expect(ex01.sumOfMultiplesUntil(10)).to.equals(23);
  })
})
