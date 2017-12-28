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

module.exports = {
  trace,
  gcd: R.curry(_gcd)
}
