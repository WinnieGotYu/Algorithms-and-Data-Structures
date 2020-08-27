//Given a string, find the length of the longest substring without repeating characters.

// function lengthOfLongestSubstring(str) {
//   //create set to store seen characters 
//   let longest = 0;
//   let seen = {};
//   let start = 0;
 
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     // index - beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - start + 1);
//     // store the index of the next char so as to not double count
//     seen[char] = i + 1;
//   }
//   return longest;
// };

const lengthOfLongestSubstring = (s) => {
  let i = 0, 
      j = 0, 
      seen = new Set(), 
      max = s.length, 
      longest = 0;
  while(i < max && j < max){
    if(!seen.has(s[j])){
      seen.add(s[j]);
      // j - i = comparing indexes distance
      // + 1 = start length count at 1 not 0
      longest = Math.max(longest, j - i + 1);
      j++;
    } else {
      seen.delete(s[i])
      i++;
    }
  }
  return longest
}

let desc = 'no string'; 
expect = 0; 
acutal = lengthOfLongestSubstring('');
assertEqual(expect, acutal, desc);

desc = 'str contains only 1 letter';
expect = 1; 
acutal = lengthOfLongestSubstring('bbbbbbb')
assertEqual(expect, acutal, desc);


desc = 'long string';
expect = 8; 
acutal = lengthOfLongestSubstring('longestsubstring')
assertEqual(expect, acutal, desc);

desc = 'random str';
expect = 3; 
acutal = lengthOfLongestSubstring('pwwkew')
assertEqual(expect, acutal, desc);

desc = 'long string';
expect = 8; 
acutal = lengthOfLongestSubstring('longestsubstring')
assertEqual(expect, acutal, desc);


function assertEqual (a, b, desc){
  if(a === b){
    console.log(`"${desc}", Expected: ${a}, Output: ${b} ✅`)
  } else {
    console.log(`"${desc}", Expected: ${a} Output: ${b} ❌`)
  }
}