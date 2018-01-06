import R from 'ramda';
import { expect } from 'chai';

import ex from '../ex04';

describe("Problem 4 - Largest Palindrome Product", () => {

  describe("isPalindrome", () => {
    it('should recognize palindromes', () => {
      const allPalindroms = R.compose(
        R.all(x => !!x),
        R.map(ex.isPalindrome)
      )
      expect(allPalindroms([4224, 9009, 123321, 1234321])).to.equals(true)
    })

    it('should recognize non-palindromes', () => {
      const noPalindromsIn = R.compose(
        R.not,
        R.any(x => !!x),
        R.map(ex.isPalindrome)
      )

      expect(noPalindromsIn(
        [4242, 9019, 123365421, 1234894321]
      )).to.equals(true)
    })

  })

  describe("largestPalindromeProduct", () => {
    it("Should yield the correct max for the 0-100's", () => {
      expect(ex.largestPalindromeProduct(0, 100)).to.equals(9009)
    })
  })
})
