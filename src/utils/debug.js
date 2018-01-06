import R from "ramda";


export const trace = R.curry((prefix, x) => {
  console.error(prefix, x);
  return x;
});
