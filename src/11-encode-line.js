/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 0;
  const arrStr = str.split('');
  let answer = '';
  let previous = arrStr[0];
  for (let i = 0; i < arrStr.length + 1; i++) {
    if (arrStr[i] === previous) {
      counter += 1;
    } else {
      if (counter > 1) {
        answer += `${counter}${previous}`;
      } else {
        answer += previous;
      }
      counter = 1;
      previous = arrStr[i];
    }
  }
  return answer;
}

module.exports = encodeLine;
