function stringShuffle(str1, str2, str3){
  if(str3.length !== str1.length + str2.length){return false}

  let str1Pointer = str1.length -1;
  let str2Pointer = str2.length -1;
  for(let i = str3.length -1; i >= 0; i--){ //i=5 
    if(str1[str1Pointer] === str3[i]){
      str1Pointer--;
    } else if(str2[str2Pointer] === str3[i]){
      str2Pointer--;
    } else {
      return false
    }
  }
  return true;
}

console.log(stringShuffle('135', '246789', '123456789')) //True? 
console.log(stringShuffle('', '', '')) //True
console.log(stringShuffle('', 'a', 'a')) //True 
console.log(stringShuffle('a', 'b', 'ab')) //True
console.log(stringShuffle('a', 'b', 'aa')) //False