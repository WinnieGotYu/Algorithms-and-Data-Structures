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

// to find center of our matrix, we want to check the N and M values
// if N is odd:
  // middle id N // 2 => Math.floor(5 // 2) = 2
// if N is even:
  // we need to grab the 2 middle values
  // then, we need to compare the 2 middle values
  // finally, we want to choose the bigger of the two in this case
// if M is odd:
  // repeat steps for N is Odd
// else:
  // repeat steps for N is Even

// should return the indexes corresponding to the middle
// function findMiddleOfMatrix(matrix) {
//   if (matrix.length === 0) return;
//   let N = matrix.length;
//   let M = matrix[0].length;
  
//   let nIdx;
//   let nUpperIndex;
//   let nLowerIndex;
  
//   let mIdx;
//   let mUpperIndex;
//   let mLowerIndex;
//   if (N % 2 === 0) {
//      nUpperIndex = Math.floor(N / 2);
//      nLowerIndex = Math.floor(N / 2) - 1;
//   } else {
//      nIdx = Math.floor(N / 2);
//   }
  
//   if (M % 2 === 0) {
//     mUpperIndex = Math.floor(M / 2);
//     mLowerIndex = Math.floor(M / 2) - 1;
//   } else {
//     mIdx = Math.floor(M / 2); 
//   };
  
//   return 
  
// }

function arrMidIndex(arr=[]) {
  if (arr % 2 === 0) {
    let a = Math.floor((arr.length / 2) - 1);
    let b = Math.floor((arr.length / 2));
    return a > b ? a : b;
  }
  return Math.floor(arr.length / 2);
}

function arrMidValue(arr=[]) {
  if (arr % 2 === 0) {
    let a = arr[Math.floor((arr.length / 2) - 1)];
    let b = arr[Math.floor((arr.length / 2))];
    return a > b ? a : b;
  }
  return arr[Math.floor(arr.length / 2)];
}


function findMiddle(matrix) {
  let rowAIndex = (matrix.length / 2) - 1;
  let rowBIndex = matrix.length / 2;
  
  const a = {
    rowIndex: rowAIndex, 
    index: arrMidIndex(matrix[rowAIndex]), 
    value: arrMidValue(matrix[rowAIndex])
  }
  
  const b = {
    rowIndex: rowBIndex, 
    index: arrMidIndex(matrix[rowBIndex]), 
    value: arrMidValue(matrix[rowBIndex])
  }
  return a.value > b.value ? a : b;  
}

function compareValues(i, j, k, l, matrix) {
  // check values between the matrix at [i][j] vs [k][l] 
  // if there's a tie, return the lower index matrix value
  if (matrix[i][j] > matrix[k][l]) {
    return matrix[i][j]
  } else {
    return matrix[k][l] 
  }
  
}


/**
function arrMidIndex(arr=[]) {
  if (arr % 2 === 0) {
    let a = Math.floor((arr.length / 2) - 1);
    let b = Math.floor((arr.length / 2));
    return a > b ? a : b;
  }
  return Math.floor(arr.length / 2);
}

function arrMidValue(arr=[]) {
  if (arr % 2 === 0) {
    let a = arr[Math.floor((arr.length / 2) - 1)];
    let b = arr[Math.floor((arr.length / 2))];
    return a > b ? a : b;
  }
  return arr[Math.floor(arr.length / 2)];
}

function findMiddle() {
  let rowAIndex = (matrix.length / 2) - 1;
  let rowBIndex = matrix.length / 2;
  
  const a = {
    rowIndex: rowAIndex, 
    index: arrMidIndex(matrix[rowAIndex]), 
    value: arrMidValue(matrix[rowAIndex])
  }
  
  const b = {
    rowIndex: rowBIndex, 
    index: arrMidIndex(matrix[rowBIndex]), 
    value: arrMidValue(matrix[rowBIndex])
  }
  return a.value > b.value ? a : b;  
}
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