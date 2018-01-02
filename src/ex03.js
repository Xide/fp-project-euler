import R from 'ramda';
import { primeFactors } from './utils';


const solve = () => {
  return R.last(primeFactors(600851475143))
}



module.exports = {
  solve
}
