import R from 'ramda';
import { expect } from 'chai';

import ex from '../ex05';

describe("Problem 5 - Smallest multiple", () => {

  describe("evenlyDivideRange", () => {
    it('yield 2520 for the 1..10 range', () => {
      expect(ex.evenlyDivideRange(2, 10)).to.equals(2520)
    })
  })
})
