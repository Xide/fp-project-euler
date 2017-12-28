import R from 'ramda';

const trace = R.curry((prefix, x) => {
  console.log(prefix, x);
  return x;
})

function _gcd(x, y) {
  return R.ifElse(
    R.equals(0),
    (_) => x,
    (_) => _gcd(y, R.modulo(x, y))
  )
}

// a -> b -> is b a factor of a
// Number -> Number -> Boolean
const isFactorOf = R.curry(
  (a, b) => R.compose(
    R.equals(0),
    R.modulo(a)
  )(b)
)


// Naive search
// n -> is n prime ?
// Number -> Boolean
const isPrime = (n) => {
  if (R.lt(n, 2)) return false;
  return R.compose(
    R.not,
    R.any(isFactorOf(n)),
    R.range(2),
    Math.sqrt,
    R.inc
  )(n)
}

// min -> max -> primes between min and max
// Number -> Number -> [Number]
const primesInRange = R.curry(
  (low, high) => R.compose(
    R.filter(isPrime),
    R.range(low)
  )(high)
)


module.exports = {
  isFactorOf,
  isPrime,
  primesInRange,
  trace,
  gcd: R.curry(_gcd)
}
