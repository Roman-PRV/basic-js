const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  length: 0,
  myChain: [],

  getLength() {
    return this.length;
  },
  addLink(value) {
    this.myChain.push("" + value);
    this.length++;
    return this;
  },
  removeLink(position) {
    if (
      position <= 0 ||
      position >= this.length ||
      typeof position != "number"
    ) {
      this.myChain = [];
      this.length = 0;

      throw new Error("You can't remove incorrect link!");
    }
    this.myChain.splice(position - 1, 1);
    this.length--;
    return this;
  },
  reverseChain() {
    this.myChain.reverse();
    return this;
  },
  finishChain() {
    result = "( " + this.myChain.join(" )~~( ") + " )";
    this.myChain = [];
    this.length = 0;
    return result;
  },
};

module.exports = {
  chainMaker,
};
