const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} string
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(string) {
  let array = [];

  for (let i = 0; i < string.length; i++) {
    let counter = 1;
    let val = 1;

    while (string[i] == string[i + val] && string[i] != string[i - 1]) {
      counter++;
      val++;
    }

    if (counter == 1 && string[i - 1] != string[i]) array.push(string[i]);
    if (counter > 1) array.push(`${counter + string[i]}`);
  }

  return array.join("");
}

module.exports = {
  encodeLine
};
