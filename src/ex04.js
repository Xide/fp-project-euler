// URL: https://projecteuler.net/problem=4
// Subject:
// A palindromic number reads the same both ways.
// The largest palindrome made from the product
// of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

import Lazy from 'lazy.js';
import R from 'ramda';


function revString(s) {
  return s == "" ? "" : revString(s.substr(1)) + s.charAt(0)
}

export const isPalindrome = s => {
  s = s.toString()
  return s.slice(0, s.length / 2) === revString(s.slice(-(s.length / 2)))
}

export const largestPalindromeProduct = R.curry((low, high) => {
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

export const solve = () => largestPalindromeProduct(99, 1000)

export default {
  solve,
  isPalindrome,
  largestPalindromeProduct
}
