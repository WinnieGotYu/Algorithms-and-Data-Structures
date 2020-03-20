/**Given a m x n matrix, if an element is 0, 
 * set its entire row and column to 0. Do it in-place.

Example 1:

Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
Example 2:

Input: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
] */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const zeros = []; 

  //find location of zeros 
  for(let row in matrix){
    for(let col in matrix[row]){
      if(matrix[row][col] === 0) zeros.push([row,col]);
    }
  }

  //loop through zeros indexs 
  for(let location of zeros){
    _inputZeros(location);
  }

  //relace with zeros
  function _inputZeros(location){
    let [row, col] = location; 
    for(let i = 0; i < matrix.length; i++){
      matrix[i][col] = 0; 
    }
    for(let j = 0; j < matrix[0].length; j++){
      matrix[row][j] = 0;
    }
  }
  return matrix;
};

console.log(setZeroes([
[0,1,2,0],
[3,4,5,2],
[1,3,1,5]
])
); //[ [ 0, 0, 0, 0 ], [ 0, 4, 5, 0 ], [ 0, 3, 1, 0 ] ]

console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]])) //[[1,0,1],[0,0,0],[1,0,1]]