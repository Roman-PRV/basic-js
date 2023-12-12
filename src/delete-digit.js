const { NotImplementedError } = require("../extensions/index.js");

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
  str = n.toString();
  digits = [];
  digits.push(+str.substring(0, str.length - 1));
  for (let i = 1; i < str.length; i = i + 1) {
    digit = str.substring(0, i - 1) + str.substring(i, str.length);
    digits.push(+digit);
  }
  return Math.max(...digits);
}

module.exports = {
  deleteDigit,
};
