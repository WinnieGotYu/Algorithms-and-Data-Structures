/** Implement a function called bubbleSort. 
 * Given an array, bubbleSort will sort the values in the array.*/

function bubbleSort(nums){
  for(let i = 0; i < nums.length; i++){
    for(let j = i+1; j < nums.length; j++)
      if(nums[i] > nums[j]){
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
  }
  return nums;
}

 console.log(bubbleSort([4, 20, 12, 10, 7, 9])//; // [4, 7, 9, 10, 12, 20]
 )