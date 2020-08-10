/**
A very hungry rabbit is placed in the center of of a garden,
represented by a rectangular N x M 2D matrix. 
The values of the matrix will represent numbers of carrots
available to the rabbit in each square of the garden. If the garden
does not have an exact center, the rabbit should start in the
square closest to the center with the highest carrot count.
On a given turn, the rabbit will eat the carrots available on the
square that it is on, and then move up, down, left, or right,
choosing the the square that has the most carrots. If there are no
carrots left on any of the adjacent squares, the rabbit will go to
sleep. You may assume that the rabbit will never have to choose
between two squares with the same number of carrots.
Write a function which takes a garden matrix and returns the number
of carrots the rabbit eats. You may assume the matrix is rectangular with at least 1 row and 1 column, and that it is populated with non-negative integers. For example: 
[
[5, 7, 8, 6, 3],
[0, 0, 7, 0, 4],
[4, 6, 3, 4, 9],
[3, 1, 0, 5, 8]
]
Should return: 
27
*/

function hungryRabbit(matrix) {
    
    let carrotsEaten = 7;
    const n = matrix.length;
    const m = matrix[0].length;

    let rabbitPosition = findCenter(matrix); // [row, col]
    while (rabbitPosition !== undefined) {
      console.log("eaten: ", carrotsEaten);
        carrotsEaten += eatCarrot(rabbitPosition, carrotsEaten);
        rabbitPosition = findNextSquare(rabbitPosition, m, n);
    } 
    
    return carrotsEaten;
    
}


/***

[
[5, 7, 8, 6, 3],
[0, 0, 7, 0, 4],
[4, 6, 3, 4, 9],
[3, 1, 0, 5, 8]
]
N = 4, M = 5
startRow = 2
startCol = 2
rows = [1, 2], cols = [2, 2] 
*/

function findCenter(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    if (n < 1 && m < 1) {
        return [0, 0]
    }
    let startRow = Math.floor(n / 2);
    let startCol = Math.floor(m / 2);
    let rows = [startRow, startRow];
    let cols = [startCol, startCol];
    
    if (n % 2 === 0) {
        rows[0] -= 1;
    }
    if (m % 2 === 0) {
        cols[0] -= 1;
    }
    
    let max = 0;
    let row = null;
    let col = null;
  
    // matrix[1][2], matrix[1][2], matrix[2][2], matrix[2][2]
    // rows = [1, 2], cols = [2, 2] => index corresponding to the middle
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < cols.length; j++) { // max=7, row=1, col=2
            if (matrix[rows[i]][cols[j]] > max) { // If our current matrix value is greater then max, 
                max = matrix[rows[i]][cols[j]]
                row = rows[i];
                col = cols[j];
            }
        }
    }
    return [row, col]
}


function eatCarrot(curr, carrotsEaten) {
    /* This function extracts coordinates from current position, 
    and adds value to our carrot counter. Replaces current position with 0 to indicate eaten.
    */
    const [row, col] = curr;
    carrotsEaten += matrix[row][col];
    matrix[row][col] = 0;
    return carrotsEaten;
}


function findNextSquare(currSquare, m, n) {
    const [row, col] = currSquare;
    const neighbors = [
        [row + 1, col],
        [row - 1, col],
        [row, col + 1],
        [row, col - 1]
    ]
    // neighbors only have values that fit inside 0 > neighbor > M && 0 > neightbor > N
    neighbors.filter(neighbor => {
        const [x, y] = neighbor;
        return x >= 0 && x < m && y >= 0 && y < n
    });
    
    let maxCarrot = 0;
    let nextSquare = null;
    
    for (let i = 0; i < neighbors; i++) {
        const [x, y] = neighbors[i];
        if (matrix[x][y] > maxCarrot) {
            maxCarrot = matrix[x][y];
            nextSquare = [x, y];
        }
    }
    
    return nextSquare
}



const matrix = [[5, 7, 8, 6, 3],
 [0, 0, 7, 0, 4],
 [4, 6, 3, 4, 9],
 [3, 1, 0, 5, 8]]

console.log(hungryRabbit(matrix));