import R from "ramda";
import Lazy from "lazy.js";


// a -> b -> is b a factor of a
// Number -> Number -> Boolean
export const isFactorOf = R.curry(
  (a, b) => R.compose(
    R.equals(0),
    R.modulo(a)
  )(b)
);


// Naive search
// n -> is n prime ?
// Number -> Boolean
export const isPrime = (n) => {
  if (R.lt(n, 2)) return false;
  return R.compose(
    R.not,
    R.any(isFactorOf(n)),
    R.range(2),
    Math.sqrt,
    R.inc
  )(n);
};

// min -> max -> primes between min and max
// Number -> Number -> [Number]
export const primesInRange = R.curry(
  (low, high) => R.compose(
    R.filter(isPrime),
    R.range(low)
  )(high)
);




const incrementer = (start) => Lazy.generate((i) => i + start + 1);

export const primeFactors = (n) => {
  // Mutable state, only to interrupt reduce if
  // the remainder of the current operation is
  // alredy one before we reach sqrt(n)
  var agg = n;

  // Prevent garbage values (0, 1) in output if the
  // input is not an integer above 1
  if (n < 2) return [];

  const factors = incrementer(1)
    .takeWhile(R.gt(Math.sqrt(n)))
    .takeWhile(() => { return agg > 1; })
    .filter(isPrime)
    .reduce(
      (acc, x) => {
        let r = acc.r;

        while (R.equals(0, R.modulo(r, x)))
          r = r / x;

        // Side effect
        agg = r;
        return {
          r: r,
          v: r == acc.r ? acc.v : R.concat(acc.v, [x])
        };
      }, {
        r: n,
        v: []
      }
    );

  return factors.r == 1 ? factors.v : R.concat(factors.v, [factors.r]);
};

export default {
  isPrime,
  isFactorOf,
  primeFactors,
  primesInRange,
};
