/**
 * Given two arrays, write a function to compute their intersection. 
 * (Find their common integers)

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
 */

const intersection = function(nums1, nums2) {
  let result = new Set();
  let set = new Set();
  
  for(let num of nums1){
      set.add(num);
  }
  
  for(let num of nums2){
      if(set.has(num)){ result.add(num)};
  }
  
  return [...result];
};
