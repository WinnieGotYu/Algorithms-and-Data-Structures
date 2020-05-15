/** 
 * Input: [1, 1, 1, 1, 2, 2, 2, 2, 5, 5, 5, 7, 7, 8, 8, 10]
Output = 6

is it possible to do this with logN ? 
*/

function isUnique(arr){
  if(!arr) return 0;
  let counter = 0;
  let left = 0; 
  while (left < arr.length){
    const foundRightIdx = findRightIdx(arr, arr[left]);
    if(foundRightIdx){
      left = foundRightIdx + 1;
      counter++;
    } else {
      left++;
      counter++;
    }
  }
  return counter;
}

//binary search
function findRightIdx(nums, target){
  let index = false;
  let start = 0; 
  let end = nums.length - 1; 
  while(start <= end){
      const mid = Math.floor(start + (end - start) / 2 );
      if(nums[mid] <= target){
          start = mid + 1;
      } else {
          end = mid - 1;
      }
      if(nums[mid] === target) index = mid;
  }
  return index;
}

console.log(`${isUnique([1, 1, 1, 1, 2, 2, 2, 2, 5, 5, 5, 7, 7, 8, 8, 10])} --- 6`);
console.log(`${isUnique([1,2,3,4,5,6,7,8,9])} --- 9`);
console.log(`${isUnique([1, 1, 1, 1, 5, 7, 7, 8, 10])} --- 5`);
console.log(`${isUnique([])} --- 0`);