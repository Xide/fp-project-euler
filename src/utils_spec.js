import R from 'ramda';
import { expect } from 'chai';

import utils from './utils';

describe("Utils - Primes", () => {
  console.log(utils.isFactorOf(10))
  console.log(utils.isFactorOf(10, 2))
  console.log(utils.isFactorOf(10)(2))
  console.log(utils.isPrime(41))
  console.log(utils.isPrime(42))

  describe("isPrime", () => {
    it("Should recognize primes", () => {
      expect(
        R.all(
          utils.isPrime,
          [2, 3, 5, 7, 11, 13, 17, 947, 953, 967, 971, 977, 983, 991]
        )
      ).to.equals(true)
    })

    it("Should recognize not primes", () => {
      expect(
        R.compose(
          R.all(R.compose(R.not, utils.isPrime)),
          R.map(R.inc)
        )([5, 7, 11, 13, 17, 947, 953, 967, 971, 977, 983, 991])
      ).to.equals(true)
    })
  })

    describe("primesInRange", () => {
      it("Should yield the correct first primes", () => {
        expect(utils.primesInRange(0, 42)).to.deep.equals(
          [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41]
        )
      })
    })

})
