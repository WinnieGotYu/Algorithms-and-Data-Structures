/** Given an integer array, find three numbers whose product is maximum and output the maximum product.

Example 1:

Input: [1,2,3]
Output: 6
 

Example 2:

Input: [1,2,3,4]
Output: 24 */

var maximumProduct = function(nums) {
  let max1 = -Infinity, 
      max2 = -Infinity,
      max3 = -Infinity,
      min1 = Infinity,
      min2 = Infinity;
      
  for(let num of nums){
      // filter for largest numbers
      if(num > max1){
        console.log("num", num);
        max3 = max2;
        max2 = max1;
        max1 = num;
        console.log("max1", max1);
      } else if(num > max2){
        console.log("max2", max2);
          max3 = max2;
          max2 = num;
      } else if(num > max3){
        console.log("max3", max3);
          max3 = num;
      }
      
      // filter for smallest
      if(num < min1){
        console.log("min1", min1);
          min2 = min1;
          min1 = num
      } else if(num < min2){
        console.log("min2", min2);
          min2 = num;
      }
  }
  // return largest product of top 3 numbers, or product of largest number and smallest 2
  return Math.max(max1 * max2 * max3, max1 * min1 * min2);
  
};

maximumProduct([1,2,3,-5,6]);