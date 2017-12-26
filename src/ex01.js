var R = require('ramda');

// Number -> Number -> Boolean
var dividesByN = function(n) {
  return R.compose(
    R.equals(0),
    R.modulo(R.__, n)
  )
}

// [Number] -> Number -> Boolean
var divideByOneOf = function(dividers) {
  return R.anyPass(R.map(dividesByN, dividers))
}

// Number -> Boolean
// Argument is the sum higher limit
var sumOfMultiplesUntil = R.compose(
  R.sum,
  R.filter(divideByOneOf([3, 5])),
  R.range(1)
)


module.exports = {
  sumOfMultiplesUntil
}
