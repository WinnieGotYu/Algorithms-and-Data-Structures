function productExceptSelf(nums){
  const result = [];

  let productSoFar = 1;
  // find product of all before the index 
  for(let i in nums){
    result[i] = productSoFar;
    productSoFar *= nums[i];
  }

  productSoFar = 1; 
  for(let i = nums.length - 1; i >= 0; i--){
    result[i] *= productSoFar;
    productSoFar *= nums[i]
  }

  return result;
}

console.log(`[1,2,3,4]: ${productExceptSelf([1,2,3,4])} = [24,12,8,6]`);