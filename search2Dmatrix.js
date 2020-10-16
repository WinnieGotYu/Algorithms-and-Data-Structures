/**
 * Write an efficient algorithm that searches 
 * for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 3
Output: true

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 13
Output: false

Input: matrix = [], target = 0
Output: false
 */

var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    let firstNum = matrix[i][0];
    let lastNum = matrix[i][matrix[i].length - 1];
    if (lastNum === target || firstNum === target) return true;
    if (lastNum > target && firstNum < target) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === target) return true;
      }
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ],
    3
  )
); // TRUE;
