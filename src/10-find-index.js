/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let end = array.length;
  let delimiter = Math.floor((start + end) / 2);
  for (let i = 0; i < array.length; i++) {
    if (array[delimiter] === value) {
      return delimiter;
    }
    if (value < array[delimiter]) {
      end = delimiter;
    } else {
      start = delimiter;
    }
    delimiter = Math.floor((start + end) / 2);
  }
  return false;
}

module.exports = findIndex;
