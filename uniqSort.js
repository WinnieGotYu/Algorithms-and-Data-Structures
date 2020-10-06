/** Given an array, return a sorted unique arr
 * 
 * input: [1,5,2,1]
 * output: [1,2,5]
 * 
 * input: [4,2,2,4,2,2] 
 * output: [2,3,4]
 */

const uniqSort = (arr) => {
  const seen = new Set();
  const result = [];
  for(let num of arr){
    if(seen.has(num)) continue;
    seen.add(num);
    result.push(num);
  }
  return result.sort((a,b) => a - b);
}

console.log(uniqSort([4,2,2,3,4,2,2,2]));