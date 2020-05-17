/**Given a non-negative integer, 
 * you could swap two digits at 
 * most once to get the maximum 
 * valued number. Return the maximum 
 * valued number you could get.

Example 1:
Input: 2736
Output: 7236
Explanation: Swap the number 2 and the number 7.
Example 2:
Input: 9973
Output: 9973
Explanation: No swap. */

// O(n^2) time 
// function maxSwap(num){
//   const nums = num.toString().split('');

//   for(let i = 0; i < nums.length; i++){
//     let currMaxNum = nums[i];
//     let index = i;

//     // find highest number
//     for(let j = nums.length - 1; j > i; j--){
//       if(nums[j] > currMaxNum){
//         currMaxNum = nums[j];
//         index = j;
//       }
//     }

//     if(currMaxNum !== nums[i]){
//       [nums[i], nums[index]] = [nums[index], nums[i]];
//       return parseInt(nums.join(''));
//     }
//   }

//   return num;
// }


// O(n) time and O(1) space 
var maxSwap = function(num) {
  const nums = num.toString();
  var left = -1;
  var right = -1;
  var max = nums.length - 1; 
  for (var i = nums.length - 2; i >= 0; i--) {
      if (nums[i] < nums[max]) {
          right = max;
          left = i;
      } else if (nums[i] > nums[max]) {
          max = i;
      }
  }

  if (left === -1) {
      return Number(nums);
  } else {
      return swap(left, right, nums); 
  }  
};

var swap = function(min, max, nums) {
  nums = nums.split('');
  
  var temp = nums[min];
  nums[min] = nums[max];
  nums[max] = temp;

  return parseInt(nums.join(''));
};
// TEST

function test(input, a, b) {
  a === b
    ? console.log(`${input}: PASS`)
    : console.log(`${input}: FAIL, ${a} != ${b}`);
}

test('12390', maxSwap(12390), 92310);
test('1100', maxSwap(1100), 1100);
test("1993", maxSwap(1993), 9913);
test(12, maxSwap(12), 21);
test(10, maxSwap(10), 10);
test(9973, maxSwap(9973), 9973);
