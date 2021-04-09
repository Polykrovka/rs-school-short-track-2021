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
  const arrDigits = n.toString().split('');
  const allDigit = [];
  let digit = '';
  for (let del = 0; del < arrDigits.length; del++) {
    for (let i = 0; i < arrDigits.length; i++) {
      if (i !== del) {
        digit += arrDigits[i];
      }
    }
    allDigit.push(Number(digit));
    digit = '';
  }
  return Math.max(...allDigit);
}

module.exports = deleteDigit;
