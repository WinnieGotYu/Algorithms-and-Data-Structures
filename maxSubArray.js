/**
 * Given an integer array nums, find the 
 * contiguous subarray (containing at least one number)
 *  which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
 */


//kadane algorithm
const maxSubArray = function(nums){
  // declare max
  let maxSum = nums[0];
  // delcare current
  let currSum = nums[0]; 

  //loop through nums starting at index 1
  for(let i = 1; i < nums.length; i++){
    // add new value to current;
    currSum += nums[i];
    // update current
    currSum = Math.max(currSum, nums[i]);
    // update max if new current is higher
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
}

//Sliding window: 

function maxSubArr(arr, num){
  let currSum = 0; 
  let maxSum = 0; 

  for(let i = 0; i < num; i++){
    maxSum += arr[i]; 
  }
  
  currSum = maxSum;

  for(let i = num; i < arr.length; i++){
    currSum = currSum + arr[i] - arr[i - num]; 
    maxSum = Math.max(currSum, maxSum);
  }
  console.log('this is  max sum', maxSum);
  return maxSum;
}


let desc = "first example"; 
let actual = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
let expected = 6;
assertEqual(actual, expected, desc);

desc = "only one number"
actual = maxSubArray([1]);
expected = 1;
assertEqual(actual, expected, desc);

desc = "only one number"
actual = maxSubArray([-2, 1]);
expected = 1;
assertEqual(actual, expected, desc);

desc = "Extra parameters"; 
actual = maxSubArr([2,6,9,2,1,8,5,6,3],3);
expected = 19;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc){
  if(a === b){
    console.log(`"${desc}", Expected: ${a}, Output: ${b} ✅`)
  } else {
    console.log(`"${desc}", Expected: ${a} Output: ${b} ❌`)
  }
}
