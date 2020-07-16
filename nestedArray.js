/** 
Given a nested array, return an array of all possible combinations.
Constraints: - length of array is not provided
             - inner array sizes can vary
             - elements in array will be random string or number 
Example: 
array = [[a,b],[+,-],[1,2,3]]  
output = ["a+1", "a+2", "a+3", "a-1", "a-2", "a-2"... "b+1", "b+2", "b+3", "b-1"]
*/

function allPossibleCases(arr) {
  if (arr.length == 1) {
    return arr[0];
  } else {
    var result = [];
    var allCasesOfRest = allPossibleCases(arr.slice(1)); // recur with the rest of array
    for (var i = 0; i < allCasesOfRest.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
        result.push(arr[0][j] + allCasesOfRest[i]);
      }
    }
    return result;
  }
}

console.log(
  allPossibleCases([
    ["a", "b"],
    ["+", "-"],
    [1, 2, 3],
  ])
);
