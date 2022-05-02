const { NotImplementedError } = require('../extensions/index.js');

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
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let splitedArr = arr.slice();
  let targetTransform = [];
  for (let i = 0; i < splitedArr.length; i++) {
    if (splitedArr[i] === '--discard-next') {
      if (i + 1 >= splitedArr.length) break;
      splitedArr[i + 1] = "s0_disc";
    } else if (splitedArr[i] === '--discard-prev') {
      if (i - 1 < 0) continue;
      targetTransform[i - 1] = "s0_disc";
    } else if (splitedArr[i] === '--double-next') {
      if (i + 1 > splitedArr.length) break;
      targetTransform[i] = splitedArr[i + 1];
    } else if (splitedArr[i] === '--double-prev') {
      if (i - 1 < 0) continue;
      targetTransform[i] = targetTransform[i - 1];
    } else {
      targetTransform.push(splitedArr[i])
    }
  };

  splitedArr = targetTransform.slice();
  targetTransform = [];

  splitedArr.forEach(item => {
    if (item != 's0_disc' && item != undefined) targetTransform.push(item);
  });

  return targetTransform;
}

module.exports = {
  transform
};
