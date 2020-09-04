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

// var maxSubArray = function(nums) {
//   let currSum = -Infinity,
//       max = -Infinity;

//   for(let i in nums){
//     //compares current number to current sum plus current num , keeps larger of the two
//     //checks if num is negative
//     currSum = Math.max(nums[i], currSum + nums[i]);
//     //checks if new sum is greater than max sum 
//     max = Math.max(max, currSum);
//   }

//   return max; 
// };

const maxSubArray = (arr) => {
  let currSum = -Infinity, 
      maxSum = -Infinity;
  for(let num of arr){
    currSum = Math.max(num, currSum + num);
    maxSum = Math.max(max, currSum);
  }
  
  return maxSum
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); //6