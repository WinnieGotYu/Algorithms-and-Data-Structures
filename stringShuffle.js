// check if third length is the same as first two combined 
// iterating third string from index 0
// check if that same char is in idx of first or second

function stringShuffle(str1, str2, str3){ //str1='abc' str2='def' str3='dabecf'
  if(str3.length !== str1.length + str2.length){return false}

  let str1Idx = str1.length -1; //0
  let str2Idx = str2.length -1; //0 
  for(let i = str3.length -1; i >= 0; i--){ //i=5 
    console.log('str3', str3[i])
    if(str1[str1Idx] === str3[i]){
      console.log('str1', str1[str1Idx])
      str1Idx--;
    } else if(str2[str2Idx] === str3[i]){
      console.log('str2', str2[str2Idx])
      str2Idx--;
    } else {
      return false
    }
  }
  return true;
}

// console.log(stringShuffle('', '', '')) //True
// console.log(stringShuffle('', 'a', 'a')) //True 
console.log(stringShuffle('135', '246789', '123456789')) //False
// console.log(stringShuffle('a', 'b', 'ab')) //True