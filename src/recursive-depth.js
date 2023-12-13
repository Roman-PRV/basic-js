const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (JSON.stringify(arr.flat(0)) == JSON.stringify(arr.flat(1))) {
      return 1;
    } else {
      let max = 1;
      arr.forEach((element) => {
        if (Array.isArray(element)) {
          let curMax = this.calculateDepth(element) + 1;
          max = Math.max(max, curMax);
        }
      });
      return max;
    }
    // let depth = 0;
    // while (true) {
    //   if (JSON.stringify(arr.flat(depth)) == JSON.stringify(arr.flat(++depth)))
    //     return depth;
    // }
  }
}

module.exports = {
  DepthCalculator,
};
