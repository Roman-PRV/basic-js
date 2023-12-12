const { NotImplementedError } = require("../extensions/index.js");

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
  let line = new Array(matrix[0].length + 2).fill(false);
  let newMatrix = [];
  newMatrix.push(line);
  matrix.forEach((elem) => {
    newElem = elem.slice(0);
    newElem.push(false);
    newElem.unshift(false);
    newMatrix.push(newElem);
  });
  newMatrix.push(line);

  for (let row = 1; row < newMatrix.length - 1; row++) {
    for (let column = 1; column < newMatrix[0].length - 1; column++) {
      let n = +newMatrix[row - 1][column];
      let ne = +newMatrix[row - 1][column + 1];
      let e = +newMatrix[row][column + 1];
      let se = +newMatrix[row + 1][column + 1];
      let s = +newMatrix[row + 1][column];
      let sw = +newMatrix[row + 1][column - 1];
      let w = +newMatrix[row][column - 1];
      let nw = +newMatrix[row - 1][column - 1];
      matrix[row - 1][column - 1] = n + ne + e + se + s + sw + w + nw;
    }
  }
  return matrix;
}

module.exports = {
  minesweeper,
};
