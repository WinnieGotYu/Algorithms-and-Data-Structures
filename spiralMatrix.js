/** Given a matrix of m x n elements (m rows, n columns),
 *  return all elements of the matrix in spiral order.*/

var spiralOrder = function(matrix) {
  let result = [];
  let rowSt = 0; 
  let rowEnd = matrix.length - 1; 
  let colSt = 0; 
  let colEnd = matrix[0].length - 1; 

  while(rowSt <= rowEnd && colSt <= colEnd){
    //move left to right
    for(let i=colSt; i <=colEnd; i++){
      result.push(matrix[rowSt][i]);
    }
    //move top down
    for(let i=rowSt + 1; i <= rowEnd; i++){
      result.push(matrix[i][colEnd]);
    }

    if(rowSt < rowEnd && colSt < colEnd){
      //move right to left
      for(let i = colEnd - 1; i > 0; i--){
        result.push(matrix[rowEnd][i]);
      }

      //move bottom up
      for(let i = rowEnd - 1; i > 0; i--){
        result.push(matrix[colSt][i]);
      }
    }
    rowSt++; 
    rowEnd--; 
    colSt++;
    colEnd--;
  }
  return result;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);
