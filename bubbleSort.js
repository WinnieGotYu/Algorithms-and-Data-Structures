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

let nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34,
  23, 2, 453, 546, 75, 67, 4342, 32
];

console.log(bubbleSort(nums));
//// [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67,75, 232, 232, 453, 546, 4342]

 console.log(bubbleSort([4, 20, 12, 10, 7, 9])//; // [4, 7, 9, 10, 12, 20]
 )