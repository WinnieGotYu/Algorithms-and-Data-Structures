function sortedSquareArr(nums){
  let left = 0; 
  let right = nums.length - 1; 
  let result = [];
  for(let i = nums.length - 1; i >= 0; i--){
    if(Math.abs(nums[left]) > nums[right]){
      result[i] = nums[left] ** 2;
      left++;
    } else { 
      result[i] = nums[right] ** 2;
      right--;
    }
  }
  return result;
}
console.log(`[${sortedSquareArr([-6,-4,1,2,3,5])}] = [1,4,9,16,25,36]`)