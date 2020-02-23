/**
 * @param {number[]} nums
 * @return {number}
 * Given an integer array nums, find the contiguous subarray 
 * (containing at least one number) which 
 * has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
 */

//using kadane's algorithm 

var maxSubArray = function(nums) {
  let maxSoFar = -Infinity;
  let max = -Infinity;

  for(let i in nums){
    console.log('nums[i]', nums[i]);
    maxSoFar = Math.max(nums[i], maxSoFar + nums[i]);
    console.log('maxSoFar = ', maxSoFar);
    max = Math.max(max, maxSoFar);
    console.log('max = ', max)
    console.log('-----------------')
  }

  return max; 
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));