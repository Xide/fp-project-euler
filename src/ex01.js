import R from 'ramda';


// Number -> Number -> Boolean
const dividesByN = (n) => {
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
const sumOfMultiplesUntil = R.compose(
  R.sum,
  R.filter(divideByOneOf([3, 5])),
  R.range(1)
)


module.exports = {
  sumOfMultiplesUntil
}
