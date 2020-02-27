/**Given a sorted array and a target value, return the index 
 * if the target is found. If not, return the index 
 * where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1 */

function searchInsert(nums, target) {
  // // if target excist in nums arr
  // let index = nums.indexOf(target);
  // if (index !== -1) return index;

  // // if target is greater than last num in sorted array,
  // // target will be inserted as last element
  // if (nums[nums.length - 1] < target) return nums.length;

  // //return idx where num would've been
  // for (let num of nums) {
  //   if (num > target) {
  //     return nums.indexOf(num);
  //   }
  // }
  let i = 0;
  while (i < nums.length) {
    if (nums[i] >= target) return i;
    i++;
  }
  return i;
}

console.log(searchInsert([1, 3, 5, 6], 7)); //4
console.log(searchInsert([1, 3, 5, 6], 0)); //0
console.log(searchInsert([1, 3, 5, 6], 2)); //1
