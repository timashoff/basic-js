const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`)

  const discardPrev = '--discard-prev'
  const discardNext = '--discard-next'
  const doublePrev = '--double-prev'
  const doubleNext = '--double-next'

  const result = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === discardNext) i++
    else if (arr[i] === doubleNext) result.push(arr[i + 1])
    else if (arr[i] === doublePrev && arr[i - 2] === discardNext) continue
    else if (arr[i] === discardPrev && arr[i - 2] !== discardNext) result.pop()
    else if (arr[i] === doublePrev) result.push(arr[i - 1])
    else result.push(arr[i])
  }

  return result
    .filter(i => i !== discardPrev)
    .filter(i => i)

}

module.exports = {
  transform
};
