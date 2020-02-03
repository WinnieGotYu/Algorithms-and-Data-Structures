/** given an n x n 2D matrix. Rotate matrix by 180 degrees*/

function rotateMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      // Switch a[i][j] and a[j][i]
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for (let idx in matrix) {
    // Reverse rows
    matrix[idx] = matrix[idx].reverse();
  }
  return matrix;
}

function oneEighty(matrix) {
  let rotateNinety = rotateMatrix(matrix);
  let oneEight = rotateMatrix(rotateNinety);
  return oneEight;
}

console.log(
  oneEighty([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);

/* output 
[ 
[ 9, 8, 7 ], 
[ 6, 5, 4 ], 
[ 3, 2, 1 ] 
] */
