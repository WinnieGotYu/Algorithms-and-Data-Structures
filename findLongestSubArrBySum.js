function longestSubArrBySum(arr, target){
  let sum = 0, 
    leftPtr = 0, 
    rightPtr = 0, 
    result = [-1];
  
  while(rightPtr < arr.length){
    sum += arr[rightPtr];

    // if sum > target, move left pointer until sum < target 
    while(leftPtr < rightPtr && sum > target){
      sum -= arr[leftPtr++];
    }

    if(sum === target && (result.length === 1 ||( result[1] - result[0] < rightPtr - leftPtr))){
      result[0] = leftPtr++; 
      result[1] = rightPtr++;
    }

    rightPtr++;
  }

  return result;
}

console.log(`[1,2,3,4,5,0,0,0,6,7,8,9,10], 15: ${longestSubArrBySum([1,2,3,4,5,0,0,0,6,7,8,9,10], 15)} = [1,8]`);