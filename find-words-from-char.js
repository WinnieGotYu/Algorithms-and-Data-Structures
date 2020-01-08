/** You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.

 

Example 1:

Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: 
The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
Example 2:

Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: 
The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10. */

var countCharacters = function(words, chars) {
    //get object for chars
    let countedChars = helper(chars);
    let totalCount = 0;
    //loop through array 
    for(let string of words){
      //take each string and pass through helper
      let currString = helper(string);
      let addToTotal = string.length;
      //loop through string obj, if none match, continue else add string length to total 
      for(let ele in currString){
        if(!countedChars[ele] || countedChars[ele] < currString[ele] ){
          addToTotal = 0;
          break;
        } 
      }
      totalCount += addToTotal
    }
    return totalCount;
};

let helper = function(chars) {
  //creating object count for the chars
  let countChar = {};
  for(let char of chars){
    if(countChar[char]){
      countChar[char] += 1;
    } else {
      countChar[char] = 1
    }
  } 
  return countChar
}

countCharacters(["cat","bt","hat","tree"], "atach");

var countCharacters = function(words, chars) {
  let lengthsSum = 0;
  
  for (const word of words) {
      let availableChars = chars;
      let goodWord = true;
      
      for (const letter of word) {
          //find index of letter in available char
          const index = availableChars.indexOf(letter);
          
          //if exist, remove letter from available letters
          if (index !== -1) {
              // make copy of string up to exclude index and combine with copy of string from index+1 until end of string
              availableChars = availableChars.slice(0, index) + availableChars.slice(index + 1);
          } else {
              goodWord = false;
              break;
          }
      }
      //if goodWord is true, add the word length  
      if (goodWord) {
          lengthsSum += word.length;
      }
  }
  
  return lengthsSum;
};