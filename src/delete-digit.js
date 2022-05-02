const { NotImplementedError } = require('../extensions/index.js');

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
  let numArr = n.toString().split('');
  let max = 0;
  for (let i = 0; i < numArr.length; i++) {
    let arr = [];
    for (let k = 0; k < numArr.length; k++) {
      if (k == i) continue;
      arr.push(numArr[k]);
    }
    if (max < +arr.join('')) max = +arr.join('');
  }

  return max;
}

module.exports = {
  deleteDigit
};
