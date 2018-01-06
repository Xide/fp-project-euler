// URL: https://projecteuler.net/problem=1
// Subject:
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

import R from 'ramda';


// Number -> Number -> Boolean
export const dividesByN = (n) => {
  return R.compose(
    R.equals(0),
    R.modulo(R.__, n)
  )
}

// [Number] -> Number -> Boolean
const divideByOneOf = (dividers) => {
  return R.anyPass(R.map(dividesByN, dividers))
}

// Number -> Boolean
// Argument is the sum higher limit
export const sumOfMultiplesUntil = R.compose(
  R.sum,
  R.filter(divideByOneOf([3, 5])),
  R.range(1)
)


export default {
  sumOfMultiplesUntil,
  dividesByN
}
