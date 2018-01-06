// URL: https://projecteuler.net/problem=6
// Subject:
// The sum of the squares of the first ten natural numbers is,
//     12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,
//     (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first
// ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//
// Find the difference between the sum of the squares of the first
// one hundred natural numbers and the square of the sum.

import R from 'ramda';
import Lazy from 'lazy.js';


// Int -> Int -> Int
export const sumOfSquares = R.curry(
  (low, high) => {
    return R.compose(
      R.sum,
      R.map(x => x * x),
      R.range(low)
    )(high + 1)
  }
)

// Int -> Int -> Int
export const squareOfSum = R.curry(
  (low, high) => {
    return R.compose(
      x => x * x,
      R.sum,
      R.range(low)
    )(high + 1)
  }
)

// Int -> Int -> Int
export const sumSquareDiff = R.curry(
  (low, high) => squareOfSum(low, high) - sumOfSquares(low, high)
)

// Int
export const solve = () => sumSquareDiff(1, 100)

export default {
  solve,
  sumOfSquares,
  squareOfSum,
  sumSquareDiff
}
