/** given an n x n 2D matrix. Rotate matrix by 180 degrees*/

var rotate = function(matrix) {
  for(let c = 0; c < matrix.length; c++){
    for(let r = c; r < matrix[c].length; r++){
      [matrix[c][r], matrix[r][c] ] = [ matrix[r][c], matrix[c][r] ]
    }
    matrix[c] = matrix[c].reverse();
  }
  return matrix;
};

function rotate180(matrix){
  let ninty = rotate(matrix); //rotates 90deg 
  let oneEighty = rotate(ninty); //rotates 180deg 
  return oneEighty;
}

console.log(rotate180([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));

/* output 
[ 
[ 9, 8, 7 ], 
[ 6, 5, 4 ], 
[ 3, 2, 1 ] 
] */
