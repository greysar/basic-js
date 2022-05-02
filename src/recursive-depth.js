const { NotImplementedError } = require('../extensions/index.js');

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
    let counter = 1;
    let arrDepth = [];
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        return arrDepth.push(counter + this.calculateDepth(item));
      }
    });
    if (arrDepth.length == 0) return counter;
    if (arrDepth.length >= 1) return Math.max(...arrDepth);
  }
}

module.exports = {
  DepthCalculator
};
