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
