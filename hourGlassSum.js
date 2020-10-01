/**
 * There are  hourglasses in . An hourglass sum is the sum of an hourglass' values. 
 * Calculate the hourglass sum for every hourglass in , 
 * then print the maximum hourglass sum. The array will always be 6X6.
-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
The  hourglass sums are:

-63, -34, -9, 12, 
-10,   0, 28, 23, 
-27, -11, -2, 10, 
  9,  17, 25, 18
The highest hourglass sum is  from the hourglass beginning at row , column :

0 4 3
  1
8 6 6
 */

const hourglassSum = (arr) => {
  let maxX = 3; // Set to 3 given the problem constraints arr[0].length
  let maxY = 3; // arr.length 
  let total = -Infinity;

  // Begin at y === 0 
  for(let y = 0; y <= maxY; y++){
    for(let x = 0; x <= maxX; x++){

      // sum top of hourglass, won't be out of bound because we preset boundary limitations
      let sum = arr[y][x] + arr[y][x+1] + arr[y][x+2]; 

      // sum middle fo hourglass 
      sum += arr[y+1][x+1];

      // sum bottom of hourglass 
      sum += arr[y+2][x] + arr[y+2][x+1] + arr[y+2][x+2];

      if(total < sum) total = sum;
    }
  }

  return total;
};

console.log(
  hourglassSum([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ])
); // 19
