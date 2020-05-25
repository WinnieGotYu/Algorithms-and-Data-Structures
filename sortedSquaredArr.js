function sortedSquareArr(nums){
  let left = 0; 
  let right = nums.length - 1; 
  const result = new Array(nums.length);
  for(let i = nums.length - 1; i > 0; i--){
    if(Math.abs(nums[left]) > nums[right]){
      result[i] = nums[left] * nums[left];
      left++;
    } else { 
      result[i] = nums[right] * nums[right];
      right--;
    }
  }
  return result;
}

console.log(`[-6,-4,1,2,3,5]: ${sortedSquareArr([-6,-4, ,1,2,3,5])} = [1,2,9,16,25,36]`)