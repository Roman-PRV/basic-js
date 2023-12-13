const { NotImplementedError } = require("../extensions/index.js");

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
  // throw new NotImplementedError("Not implemented");
  const emptyObject = {};
  if (!Array.isArray(arr))
    throw Error(`'arr' parameter must be an instance of the Array!`);
  let res = arr.map((elem) => {
    if (
      typeof elem !== "string" ||
      elem.startsWith("--discrard") ||
      (typeof elem === "string" && !elem.startsWith("--"))
    ) {
      return elem;
    } else {
      return emptyObject;
    }
  });
  res.forEach((elem, index) => {
    if (elem == emptyObject) {
      if (arr[index] === "--double-next" && index < res.length - 1) {
        res.splice(index, 1, res[index + 1]);
        console.log(index, arr[index], res[index + 1]);
      }
      if (arr[index] === "--double-prev" && index > 0) {
        res.splice(index, 1, res[index - 1]);
        console.log(index, arr[index], res[index - 1]);
      }

      if (arr[index] === "--discard-prev" && index > 0) {
        res.splice(index - 1, 1, emptyObject);
      }
      if (arr[index] === "--discard-next" && index < arr.length - 1) {
        res.splice(index + 1, 1, emptyObject);
      }
    }
  });
  return res.filter((elem) => {
    return elem !== emptyObject;
  });
}

module.exports = {
  transform,
};
