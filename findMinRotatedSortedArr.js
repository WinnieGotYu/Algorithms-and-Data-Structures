/**Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:

Input: [3,4,5,1,2] 
Output: 1
Example 2:

Input: [4,5,6,7,0,1,2]
Output: 0 */

function findMin(arr){
  let left = 0,  
  right = arr.length - 1; 
  while( left < right){
    const mid = Math.floor(left + ((right - left)/2)); 
    if(arr[mid] > arr[right]){
      left = mid + 1;   
    } else {
      right = mid;
    }
  }
  return arr[left];
}

console.log(`[3,4,5,1,2]: ${findMin([3,4,5,1,2])} = 1`);
console.log(`[4,5,6,7,0,1,2]: ${findMin([4,5,6,7,0,1,2])} = 0`);