const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
    this.vigenerLine =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  }
  encrypt() {
    if (!arguments || arguments.length < 2 || !arguments[0] || !arguments[1])
      throw Error(`Incorrect arguments!`);
    let text = arguments[0].split("");
    let key = arguments[1];
    let longkey = key
      .repeat(arguments[0].length / arguments[1].length + 1)
      .split("");
    text.forEach((elem, index) => {
      if (!/[A-Za-z]/.test(elem.toUpperCase())) {
        longkey.splice(index, 0, text[index]);
      }
    });
    longkey = longkey.splice(0, text.length);

    let res = [];
    longkey.forEach((letter, index) => {
      if (!/[A-Za-z]/.test(letter)) {
        res.push(letter);
        return;
      }
      let lineLetterIndex = this.vigenerLine.indexOf(letter.toUpperCase());

      let line = this.vigenerLine.slice(lineLetterIndex, lineLetterIndex + 26);
      let indexLetter = this.vigenerLine.indexOf(text[index].toUpperCase());
      let decodedLetter = line[indexLetter];
      res.push(decodedLetter);
    });
    if (!this.direction) res.reverse();
    return res.join("");
  }
  decrypt() {
    if (!arguments || arguments.length < 2 || !arguments[0] || !arguments[1])
      throw Error(`Incorrect arguments!`);

    let text = arguments[0].split("");
    let key = arguments[1];
    let longkey = key
      .repeat(arguments[0].length / arguments[1].length + 1)
      .split("");
    text.forEach((elem, index) => {
      if (!/[A-Za-z]/.test(elem)) {
        longkey.splice(index, 0, text[index]);
      }
    });
    longkey = longkey.splice(0, text.length);
    let res = [];
    longkey.forEach((letter, index) => {
      if (!/[A-Za-z]/.test(letter)) {
        res.push(letter);
        return;
      }
      let lineLetterIndex = this.vigenerLine.indexOf(letter.toUpperCase());

      let line = this.vigenerLine.slice(lineLetterIndex, lineLetterIndex + 26);

      let indexLetter = line.indexOf(text[index].toUpperCase());
      let decodedLetter = this.vigenerLine[indexLetter];
      res.push(decodedLetter);
    });
    if (!this.direction) res.reverse();
    return res.join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
