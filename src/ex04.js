import Lazy from 'lazy.js';
import R from 'ramda';


function revString(s) {
  return s == "" ? "" : revString(s.substr(1)) + s.charAt(0)
}

const isPalindrome = s => {
  s = s.toString()
  return s.slice(0, s.length / 2) === revString(s.slice(-(s.length / 2)))
}

const largestPalindromeProduct = R.curry((low, high) => {
  return Lazy.range(low, high)
    .map(x => {
      const p =  Lazy.range(x, high)
      .map(y => x * y)
      .filter(isPalindrome)
      .max()
      return p;
    })
    .max()
})

const solve = () => largestPalindromeProduct(99, 1000)

module.exports = {
  solve,
  isPalindrome,
  largestPalindromeProduct
}
