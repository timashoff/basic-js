const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  let result = 0

  const arr = n.toString().split('')

  arr.forEach((_el, i) => {
    const newArr = [...arr]
    newArr.splice(i, 1)
    let newResult = +newArr.join('')
    if (newResult > result) result = newResult
  })

  return result
}

module.exports = {
  deleteDigit
};
