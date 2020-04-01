/** Given a matrix of m x n elements (m rows, n columns),
 *  return all elements of the matrix in spiral order.*/

var spiralOrder = function(matrix) {
    if (!matrix || !matrix.length) {
        return [];   
    }
    
    const solArr = [];
    
    let rowSt = 0;
    let rowEnd = matrix.length - 1;
    let colSt = 0;
    let colEnd = matrix[0].length - 1;
    
    while (rowSt <= rowEnd && colSt <= colEnd) {
        for (let i = colSt; i <= colEnd; i++) {
            solArr.push(matrix[rowSt][i]);
        }
        
        rowSt++;

        for (let i = rowSt; i <= rowEnd; i++) {
            solArr.push(matrix[i][colEnd]);
        }
        
        colEnd--;
        
        if (rowSt <= rowEnd) {
            for (let i = colEnd; i >= colSt; i--) {
                solArr.push(matrix[rowEnd][i]);
            }

            rowEnd--;        
        }
        
        
        if (colSt <= colEnd) {
            for (let i = rowEnd; i >= rowSt; i--) {
                solArr.push(matrix[i][colSt]);
            }

            colSt++;            
        }
    }
    
    return solArr;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);
