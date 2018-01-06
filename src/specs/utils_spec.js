import R from "ramda";
import { expect } from "chai";

import {
  isPrime,
  primesInRange,
  primeFactors
} from "../utils";

describe("Utils - Primes", () => {
  describe("isPrime", () => {
    it("Should recognize primes", () => {
      expect(
        R.all(
          isPrime,
          [2, 3, 5, 7, 11, 13, 17, 947, 953, 967, 971, 977, 983, 991]
        )
      ).to.equals(true);
    });

    it("Should recognize not primes", () => {
      expect(
        R.compose(
          R.all(R.compose(R.not, isPrime)),
          R.map(R.inc)
        )([5, 7, 11, 13, 17, 947, 953, 967, 971, 977, 983, 991])
      ).to.equals(true);
    });
  });

  describe("primesInRange", () => {
    it("Should yield the correct first primes", () => {
      expect(primesInRange(0, 42)).to.deep.equals(
        [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41]
      );
    });
  });
  describe("primeFactors", () => {
    it("Should yield the correct factors for 100", () => {
      expect(primeFactors(100)).to.deep.equals(
        [2, 5]
      );
    });

    it("Should yield an empty array for low values", () => {
      expect(primeFactors(0)).to.deep.equals([]);
      expect(primeFactors(1)).to.deep.equals([]);
    });
  });
});
