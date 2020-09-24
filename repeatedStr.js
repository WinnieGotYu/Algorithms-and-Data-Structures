/** Lilah has a string, , of lowercase English letters that she repeated infinitely many times.

Given an integer, , find and print the number of letter a's in the first  letters of Lilah's infinite string.

For example, if the string  and , the substring we consider is , the first  characters of her infinite string. There are  occurrences of a in the substring.*/


function repeatedString(s, n) {
  let newStr = "";
  while(newStr.length < 10){
    newStr += s;
  }
  let count = 0;
  for(let i = 0; i < 10; i++){
    if(newStr[i] === "a") count++;
  }
  return count;
}

console.log(repeatedString("aba", 10));