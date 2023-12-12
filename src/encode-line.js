const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  arr = str.split("").map((elem) => [elem, 1]);

  for (let i = 0; i < arr.length - 1; i++) {
    elem1 = arr[i];
    elem2 = arr[i + 1];
    if (elem1[0] == elem2[0]) {
      arr[i] = [elem1[0], elem1[1] + 1];
      arr.splice(i + 1, 1);
      i = i - 1;
    }
  }
  return arr
    .map((elem) => {
      return elem[1] == 1 ? elem[0] : elem[1] + elem[0];
    })
    .join("");
}

module.exports = {
  encodeLine,
};
