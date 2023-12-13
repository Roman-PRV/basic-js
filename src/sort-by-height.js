const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let ones = [];
  let newArr = arr.filter((elem, index) => {
    if (elem === -1) {
      ones.push(index);
      return false;
    }
    return true;
  });
  newArr.sort((elem1, elem2) => {
    return +elem1 - +elem2;
  });
  ones.forEach((elem) => {
    newArr.splice(elem, 0, -1);
  });
  return newArr;
}

module.exports = {
  sortByHeight,
};
