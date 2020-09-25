/**
 * A left rotation operation on an array shifts each 
 * of the array's elements  unit to the left. 
 * For example, if  left rotations are 
 * performed on array , then the array would become .
 * [1,2,3,4,5] 2 left rotations => [3,4,5,1,2]
 * arr = []
 * d = int
 */


 const leftRotation = (arr, d) => {
  const copyOfArr = [...arr];
  while(d--){
    copyOfArr.push(copyOfArr.shift());
  }
  return copyOfArr;
}

console.log(leftRotation([1,2,3,4,5], 2)) //[3,4,5,1,2]