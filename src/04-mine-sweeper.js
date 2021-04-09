/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const answer = [];
  let list = [];
  let counter = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      for (let q = i - 1; q <= i + 1; q++) {
        for (let w = j - 1; w <= j + 1; w++) {
          if (matrix[q] !== undefined) {
            if (matrix[q][w] === true) {
              counter += 1;
            }
          }
        }
      }
      if (matrix[i][j] === true) {
        counter -= 1;
      }
      list.push(counter);
      counter = 0;
    }
    answer.push(list);
    list = [];
  }
  return answer;
}

module.exports = minesweeper;
