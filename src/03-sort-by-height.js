/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sort = arr.slice();
  sort.sort((a, b) => {
    if (a > b) return 1; // если первое значение больше второго
    if (a === b) return 0; // если равны или если значение -1
    if (a < b) return -1; // если первое значение меньше второго
    return 0;
  });
  while (sort[0] === -1) {
    sort.shift();
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      sort.splice(i, 0, -1);
    }
  }
  return sort;
}

module.exports = sortByHeight;
