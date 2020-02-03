function swapPalindrome(str){
  if(!str){return false};

  nonMatchedCount = 0;
  let middleIdx = Math.floor(str.length/2)
  for(let i = 0; i < middleIdx; i++){
    if(str[i] !== str[- 1 - i]){
      nonMatchedCount += 1;
    }
  }

  if(nonMatchedCount === 0 && str.length % 2 === 1){
    return true;
  }

  return nonMatchedCount === 1;
}

console.log(swapPalindrome("aac")) //True
console.log(swapPalindrome('a')) //True
console.log(swapPalindrome('soos')) //False
console.log(swapPalindrome('')) //False
console.log(swapPalindrome('raceacr')) //False