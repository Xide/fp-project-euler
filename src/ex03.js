// URL: https://projecteuler.net/problem=3
// Subject:
// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

import R from "ramda";
import { primeFactors } from "./utils";


const solve = () => {
  return R.last(primeFactors(600851475143));
};



export default {
  solve
};
