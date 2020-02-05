/**Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice. */

function twoSums(nums, target){
  //store seen numbers
  let seenNums = new Map();
  //iterate through nums 
  for(let idx in nums){
    let diff = target - nums[idx];
    //if we have seen the number before
    if(seenNums.has(diff)){
      return [seenNums.get(diff), idx]
    } else {
      //set the seen num with its index as key
      seenNums.set(nums[idx], idx)
    }
  }
  return [];
}

console.log(twoSums([1,2,3,9,10,4], 7))
console.log(twoSums([3,3], 6));
console.log(twoSums([1], 1));
