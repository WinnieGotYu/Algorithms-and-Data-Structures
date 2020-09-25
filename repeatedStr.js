/** Lilah has a string, , of lowercase English letters that she repeated infinitely many times.

Given an integer, , find and print the number of letter a's in the first  letters of Lilah's infinite string.

For example, if the string  and , the substring we consider is , the first  characters of her infinite string. There are  occurrences of a in the substring.*/


function repeatedString(s, n) {
  let numberOfAs = 0;

  if(n >= s.length){
    // Counts number of As
    let occurrencesOfAs = [...s].filter(char => char === "a").length;

    // Multiply by times to be repeated
    numberOfAs = Math.floor(n/s.length) * occurrencesOfAs;  
  }

  let tailStringLength = n % s.length;

  for(let i = 0; i < tailStringLength; i++){
    if(s[i] === "a") numberOfAs++;
  }

  return numberOfAs;
}

console.log(repeatedString("aba", 10));