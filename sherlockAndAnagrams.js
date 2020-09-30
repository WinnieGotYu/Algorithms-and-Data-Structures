/**Two strings are anagrams of each other if the 
 * letters of one string can be rearranged to form 
 * the other string. Given a string, find the number 
 * of pairs of substrings of the string that are anagrams of each other.

For example , the list of all anagrammatic pairs is  at positions  respectively.

Function Description

Complete the function sherlockAndAnagrams in the editor below. 
It must return an integer that represents the number of 
anagrammatic pairs of substrings in .

sherlockAndAnagrams has the following parameter(s):

s: a string .
Input Format

The first line contains an integer , the number of queries.
Each of the next  lines contains a string  to analyze. 

input: "abba"
output: 4

input: "abcd"
output: 0

input: "ifailuhkqq"
output: 3
*/

const sherlockAndAnagrams = (str) => {
  // Create Map containing all substrings

  const frequencyCounter = new Map();

  for (let i = 0; i < str.length; i++) {
    let currentSubStr = ""; 
    for(let j = i; j < str.length; j++){
      currentSubStr += str[j];
      let sortedSubStr = currentSubStr.split('').sort().join('');
      if(frequencyCounter.has(sortedSubStr)){
        frequencyCounter.set(sortedSubStr, frequencyCounter.get(sortedSubStr) + 1);
      } else {
        frequencyCounter.set(sortedSubStr, 0);
      }
    }
  }

  let anagramCount = 0; 
  frequencyCounter.forEach( count => {
    for(let i = 0; i <= count; i++){
      anagramCount += i;
    }
  })

  return anagramCount;
};

console.log(sherlockAndAnagrams("abba")) //4