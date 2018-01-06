// URL: https://projecteuler.net/problem=2
// Subject:
// Each new term in the Fibonacci sequence is generated
// by adding the previous two terms.
// By starting with 1 and 2, the first 10 terms will be:
//     1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
// By considering the terms in the Fibonacci sequence
// whose values do not exceed four million,
// find the sum of the even-valued terms.

import R from 'ramda';


// Return the nth element of the fibonacci sequence
// Number -> Number
export const fibAt = R.memoizeWith(
  R.identity,
  R.compose(
    R.max(0),
    R.when(
      R.lte(2),
      // Does not work in a pointfree maner
      // See : https://stackoverflow.com/questions/40985044/pointfree-recursion-in-js-with-ramda
      (x) => R.add(fibAt(x - 2), fibAt(x - 1))
    )
  )
)

// Number -> [Number]
export const fibUntil = (mx) => {
  // n -> Is the nth fibonacci number below mx
  // Number -> Boolean
  const isBelowLimit = R.compose(
    R.flip(R.lt)(mx),
    fibAt
  )

  // Filter is here to return [] in the case of mx = 0
  return R.filter(
    R.flip(R.lt)(mx),
    R.reduceWhile(
      (acc, x) => isBelowLimit(x),
      (acc, x) => R.append(fibAt(x), acc),
      [0],
      R.range(1, (mx * 2))
    )
  )
}


// Number -> Boolean
const isEven = R.compose(
  R.equals(0),
  R.flip(R.modulo)(2)
)


// n -> Sum of the even fibonacci numbers up to n
// Number -> Number
export const evenFibonacciNumbersUntil = R.compose(
  R.sum,
  R.filter(isEven),
  fibUntil
)


export default {
  fibAt,
  fibUntil,
  evenFibonacciNumbersUntil
}
