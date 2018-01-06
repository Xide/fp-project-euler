import R from 'ramda';
import { expect } from 'chai';

import ex from '../ex06';

describe("Problem 6 - Sum square difference", () => {

  describe("sumOfSquares", () => {
    it('yield 385 for the 1..10 range', () => {
      expect(ex.sumOfSquares(1, 10)).to.equals(385)
    })
  })

  describe("squareOfSum", () => {
    it('yield 3025 for the 1..10 range', () => {
      expect(ex.squareOfSum(1, 10)).to.equals(3025)
    })
  })

  describe("sumSquareDiff", () => {
    it('yield 2640 for the 1..10 range', () => {
      expect(ex.sumSquareDiff(1, 10)).to.equals(2640)
    })
  })

})
