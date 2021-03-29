const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    if (type === undefined) {
      this.type = true;
    } else {
      this.type = type;
    }
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("THROWN");
    }

    const alphabet = [
      0,
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ],
      newString = [];

    let newMessage = message.toLowerCase();
    let newKey = key.toLowerCase();

    for (let i = 0, k = 0; i < newMessage.length; i++) {
      let index = (alphabet.indexOf(newMessage[i]) + alphabet.indexOf(newKey[k % newKey.length]) - 1) % 26;
      if (alphabet.indexOf(newMessage[i]) === -1) {
        newString.push(newMessage[i]);
      } else if (index === 0) {
        newString.push(alphabet[26]);
        k++;
      } else {
        newString.push(alphabet[index]);
        k++;
      }
    }

    if (this.type === false) {
      newString.reverse();
    }

    return newString.join("").toUpperCase();
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("THROWN");
    }

    const alphabet = [
      0,
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ],
      newString = [];

    let newMessage = message.toLowerCase();
    let newKey = key.toLowerCase();

    for (let i = 0, k = 0; i < newMessage.length; i++) {
      if (alphabet.indexOf(newMessage[i]) !== -1) {
        let index = alphabet.indexOf(newMessage[i]) - alphabet.indexOf(newKey[k % newKey.length]) + 1;
        index <= 0 ? newString.push(alphabet[index + 26]) : newString.push(alphabet[index]);
        k++;
      } else {
        newString.push(newMessage[i]);
      }
    }

    if (this.type === false) {
      newString.reverse();
    }
    return newString.join("").toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
