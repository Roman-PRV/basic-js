const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  a1 = s1.split("");
  a2 = s2.split("");
  let counter = 0;

  a1.forEach((element) => {
    let index = a2.indexOf(element);
    console.log(index);
    if (index >= 0) {
      counter++;
      a2.splice(index, 1);
    }
  });

  console.log(a1);
  console.log(a2);

  return counter;
}

module.exports = {
  getCommonCharacterCount,
};
