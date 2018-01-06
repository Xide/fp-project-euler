import Lazy from 'lazy.js';
import R from 'ramda';

// Int -> Int -> Lazy.Sequence -> Lazy.Sequence
const _evenRangeFilter = R.curry(
  (low, high, gen) => {
    const inc = (low - high) / Math.abs(low - high)

    if (low === high) return gen;
    return _evenRangeFilter(
      low,
      high + inc,
      gen.filter(x => ((x % high) === 0))
    )
  }
)

// Int -> Int -> Int
export const evenlyDivideRange = R.curry((low, high) => {
  const gen = Lazy.generate(i => i + high)
  const filtered = _evenRangeFilter(low, high, gen)
  return filtered.first()
})

// Int
export const solve = () => evenlyDivideRange(10, 20)

export default {
  solve,
  evenlyDivideRange
}
