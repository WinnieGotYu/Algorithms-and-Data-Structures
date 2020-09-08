/**Given a pattern and a string str, 
 * find if str follows the same pattern.

Here follow means a full match, 
such that there is a bijection between
a letter in pattern and a non-empty word in str.

Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true
Example 2:

Input:pattern = "abba", str = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", str = "dog dog dog dog"
Output: false */

const wordPattern = (pattern, str) => {
  let strVals = str.split(' '),
      trackedPatterns = {},
      seenStrs = {};
  for(let i in strVals){
    let currKey = strVals[i], 
        currVal = pattern[i];
    if(!trackedPatterns[currKey]){
      trackedPatterns[currKey] = currVal;
      if(seenStrs[currVal]) return false;
      seenStrs[currVal] = currKey;
    } else {
      if(trackedPatterns[currKey] !== currVal) return false;
    }
  }
  return true;
}

console.log(wordPattern("abba", "dog cat cat dog")) // true;
console.log(wordPattern("abba", "dog dog dog dog")) // false;