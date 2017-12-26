var R = require('ramda');

var fibAt = R.memoizeWith(
  R.identity,
  R.compose(
    R.max(0),
    R.when(
      R.lte(2),
      // Does not work in a pointfree maner
      // See : https://stackoverflow.com/questions/40985044/pointfree-recursion-in-js-with-ramda
      function (x) { return R.add(fibAt(x - 2), fibAt(x - 1)) }
    )
  )
)

var fibUntil = function(mx) {
  return R.takeWhile(
    R.flip(R.lt)(mx),
    R.map(fibAt, R.range(0, R.inc(mx)))
  )
}

var isEven = R.compose(
  R.equals(0),
  R.flip(R.modulo)(2)
)

var evenFibonacciNumbersUntil = R.compose(
  R.sum,
  R.filter(isEven),
  fibUntil
)


module.exports = {
  fibAt,
  evenFibonacciNumbersUntil
}
