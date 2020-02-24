/**Given a non-negative integer numRows, 
 * generate the first numRows of Pascal's triangle.
 * Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
] */

 function pascalTriangle(numRows){
  //initialize result array
  let pascal = []; 

  //iterate until pascal has numRows of subArray 
  for(let i = 0; i < numRows; i++){
    //set up subArray 
    pascal[i] = []; 
    //first idx of subArray is always 1 
    pascal[i][0] = 1; 

    //fill subArray 
    for(let j = 1; j < i; j++){
      pascal[i][j] = pascal[i - 1][j - 1] + pascal[i -1][j];
    }
    pascal[i][i] = 1; 
  }
  return pascal; 
 }

 console.log(pascalTriangle(5));

 /**[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
] */

console.log(pascalTriangle(4));

 /**[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1]
] */