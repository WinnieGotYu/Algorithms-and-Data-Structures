/**Given an array nums containing n + 1 integers 
 * where each integer is between 1 and n (inclusive), 
 * prove that at least one duplicate number must exist. 
 * Assume that there is only one duplicate number, find the duplicate one.

Example 1:

Input: [1,3,4,2,2]
Output: 2
Example 2:

Input: [3,1,3,4,2]
Output: 3
Note:

You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once. */

function findRepeat(nums){
  let tortoise = nums[0]; 
  let hare = nums[nums[0]]; 

  // find intersection point, where there is a cycle in linked list 
  while(true){
    tortoise = nums[tortoise];
    hare = nums[nums[hare]]; 
    // intersection point found
    if(tortoise === hare) break;
  }

  // find entrance point of cycle 
  let ptr1 = nums[0]; 
  let ptr2 = tortoise;

  while(ptr1 !== ptr2){
    ptr1 = nums[ptr1];
    ptr2 = nums[ptr2];
  }

  return ptr1;
}

let desc = 'just the repeated number';
let actual = findRepeat([1, 1]);
let expected = 1;
assertEqual(actual, expected, desc);

desc = 'short array';
actual = findRepeat([1, 2, 3, 2]);
expected = 2;
assertEqual(actual, expected, desc);

desc = 'medium array';
actual = findRepeat([1, 2, 5, 5, 5, 5]);
expected = 5;
assertEqual(actual, expected, desc);

desc = 'long array';
actual = findRepeat([4, 1, 4, 8, 3, 2, 7, 6, 5]);
expected = 4;
assertEqual(actual, expected, desc);

desc = 'longer array';
actual = findRepeat([8, 4, 1, 8, 3, 2, 7, 5, 6]);
expected = 8;
assertEqual(actual, expected, desc);

function assertEqual (a, b, desc){
  if(a === b){
    console.log(`"${desc}", Expected: ${a}, Output: ${b} ✅`)
  } else {
    console.log(`"${desc}", Expected: ${a} Output: ${b} ❌`)
  }
}