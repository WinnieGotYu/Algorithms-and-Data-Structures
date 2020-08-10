const titleToNumber = (s) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  const alpha = {};
  let j = 1; 
  for(let char of alphabet){
      alpha[char] = j;
      j++;
  }
  let result = 0;
  for(let char of s){
    result = result * 26; 
    console.log(`current RESULT BEFORE ${result}`);
    result += alpha[char];
    console.log(`current RESULT AFTER ${result}`);
  }
  console.log(result);
  return result;
}

titleToNumber('ZY'); //701
