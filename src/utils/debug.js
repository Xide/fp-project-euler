import R from 'ramda';


export const trace = R.curry((prefix, x) => {
  console.log(prefix, x);
  return x;
})
