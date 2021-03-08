const CustomError = require("../extensions/custom-error");

const chainMaker = {
  out: [],
  getLength() {
    return this.out.length;
  },
  addLink(value) {
    this.out.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || (0 < position) && (position > this.out.length - 1)) {
      this.out = [];
      throw new Error();
    }
    this.out.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.out.reverse();
    return this;
  },
  finishChain() {
    let str = '';
    for (let i = 0; i < this.out.length; i++) {
      if (i === (this.out.length - 1)) {
        str += `( ${this.out[i]} )`;
      } else {
        str += `( ${this.out[i]} )~~`;
      }
    }
    this.out = [];
    return str;
  }
};

module.exports = chainMaker;
