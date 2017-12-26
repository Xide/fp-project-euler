var R = require('ramda');


var trace = R.curry(function(prefix, x) {
  console.log(prefix, x);
  return x;
})


module.exports = {
  trace
}
