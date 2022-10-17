const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {

  const arr = n.toString().split('')

  let num = arr.reduce((acc, item) => acc + +item, 0)
  if (num > 9) num = +arr.splice(1, arr.length)

  return num
}

module.exports = {
  getSumOfDigits
};
