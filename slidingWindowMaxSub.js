/**
 * Given an array nums, there is a sliding window of size k 
 * which is moving from the very left of the array to the 
 * very right. You can only see the k numbers in the window. 
 * Each time the sliding window moves right by one position. 
 * Return the max sliding window.
 * 
 * nums = [1,3,-1,-3,5,3,6,7], and k = 3, maxSum = 7
 */

var maxSlidingWindow = function(nums, k) {
  let maxTotal = 0;
  for(let i = 0; i < k; i++){
      maxTotal += nums[i];
  } 
  
  let currentTotal = maxTotal;
  for(let i = k; i<nums.length; i++){
     currentTotal += nums[i] - nums[i - k];
     maxTotal = Math.max(maxTotal, currentTotal);
  }
  return maxTotal;
};

let desc = 'first example'; 
actual = maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3);
expect = 16;
assertEqual(expect, actual, desc);

function assertEqual (a, b, desc){
  if(a === b){
    console.log(`"${desc}", Expected: ${a}, Output: ${b} ✅`)
  } else {
    console.log(`"${desc}", Expected: ${a} Output: ${b} ❌`)
  }
}