const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  sum = 0;
  for (column = 0; column < matrix[0].length; column++) {
    sum += matrix[0][column];
    for (row = 1; row < matrix.length; row++) {
      if (matrix[row - 1][column] != 0) sum += matrix[row][column];
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
