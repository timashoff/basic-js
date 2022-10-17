const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  const numMatrix = matrix.map(item => item.map(i => 0))

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {

      let count = 0
      count = matrix[i][j + 1] ? count + 1 : count
      count = matrix[i][j - 1] ? count + 1 : count

      if (matrix[i - 1]) {
        count = matrix[i - 1][j - 1] ? count + 1 : count
        count = matrix[i - 1][j] ? count + 1 : count
        count = matrix[i - 1][j + 1] ? count + 1 : count
      }

      if (matrix[i + 1]) {
        count = matrix[i + 1][j - 1] ? count + 1 : count
        count = matrix[i + 1][j] ? count + 1 : count
        count = matrix[i + 1][j + 1] ? count + 1 : count
      }

      numMatrix[i][j] = count
    }
  }

  return numMatrix

}

module.exports = {
  minesweeper
};
