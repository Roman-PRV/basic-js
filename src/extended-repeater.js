const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addition = "";
  if (options.hasOwnProperty("addition")) {
    addition = ("" + options.addition + (options.additionSeparator ?? "|"))
      .repeat(options.additionRepeatTimes ?? 1)
      .slice(
        0,
        -(options.additionSeparator ? options.additionSeparator.length : 1)
      );
  }

  let result = (str + addition + (options.separator ?? "+"))
    .repeat(options.repeatTimes ?? 1)
    .slice(0, -(options.separator ? options.separator.length : 1));
  return result;
}

module.exports = {
  repeater,
};
