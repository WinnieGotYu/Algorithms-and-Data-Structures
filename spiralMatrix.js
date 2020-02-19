/** Given a matrix of m x n elements (m rows, n columns),
 *  return all elements of the matrix in spiral order.*/

var spiralOrder = function(matrix) {
  if(matrix.length==0) return [];
  
  let rowStart=0, rowEnd=matrix.length-1, colStart=0, colEnd=matrix[0].length-1;
  let result=[];
  
  while(rowStart<=rowEnd && colStart<=colEnd) {
      //move right
      for(let i=colStart; i<=colEnd; i++) {
          result.push(matrix[rowStart][i]);
      }
      //move down 
      for(let i=rowStart+1; i<=rowEnd; i++) {
          result.push(matrix[i][colEnd]);
      }
      
      if(rowStart<rowEnd && colStart<colEnd) {
          //move left 
          for(let i=colEnd-1; i>colStart; i--) {
              result.push(matrix[rowEnd][i]);
          }
          //move up
          for(let i=rowEnd; i>rowStart; i--) {
              result.push(matrix[i][colStart]);
          }
      }
      rowStart++;
      rowEnd--;
      colStart++;
      colEnd--;
  }
  
  return result;
};

console.log(spiralOrder([
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
 ]))