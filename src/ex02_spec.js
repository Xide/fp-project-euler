import R from 'ramda';
import { expect } from 'chai';

import ex from './ex02';

describe("Problem 2 - Even Fibonacci numbers", () => {
  describe("fibAt", () => {
    it("Should yield the correct fibonnaci sequence for the 10 first terms", () => {
      expect(R.map(ex.fibAt, R.range(0, 10))).to.deep.equals(
        [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
      )
    })
  })
  describe("fibUntil", () => {
    it("Should not print anything when max is 0", () => {
      expect(ex.fibUntil(0)).to.deep.equals([])
    })
    it("Should not print values above the max", () => {
      expect(ex.fibUntil(64)).to.deep.equals([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
  })
})
