const { NotImplementedError } = require('../extensions/index.js');

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

  let parameters = {
    repeatTimes: Number(options.repeatTimes),
    separator: String(options.separator || '+'),
    addition: String(options.addition),
    additionRepeatTimes: Number(options.additionRepeatTimes),
    additionSeparator: String(options.additionSeparator || '|')
  }

  let string = '';
  let finalString = [];

  if (options.additionRepeatTimes != 0 && options.additionRepeatTimes != undefined) {
    for (let i = 1; i <= parameters.additionRepeatTimes; i++) {
      if (i == 1) string += str;
      string += parameters.addition;
      if (i == parameters.additionRepeatTimes) break;
      string += parameters.additionSeparator;
    }
  } else {
    string += str;
  }

  if (options.repeatTimes == undefined && options.additionRepeatTimes == undefined) return string + options.addition;
  if (options.repeatTimes == undefined) return string;

  for (let i = 1; i <= parameters.repeatTimes; i++) {
    finalString.push(string);
    if (i == parameters.repeatTimes) break;
    finalString.push(parameters.separator);
  }

  return finalString.join('');
}

module.exports = {
  repeater
};
