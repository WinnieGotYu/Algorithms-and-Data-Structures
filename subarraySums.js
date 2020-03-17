/**Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 //hash map way 
function subarraysSum(nums, k){
  const seen = new Map([[0,1]]);
  let sum = 0; 
  let total = 0; 
  for(let num of nums){
    sum = sum + num;
    total += (seen.get(sum - k) || 0);
    seen.set(sum, ((seen.get(sum) || 0) + 1))
  }
  return total;
}

//brute force way 
var subarraySumBF = function(nums, k) {
  let counter = 0;
  for (let i=0;i<nums.length;i++) {
      //start at 0; 
      let base = 0;
      for (let j=i;j<nums.length;j++) {
          base+=nums[j];
          if (base == k) counter++;
      }
  }
  return counter;
};

console.log(subarraysSum([1,1,1],2)); //2
console.log(subarraySumBF([1,2,3,4,5,6,7,9],9)); //3
