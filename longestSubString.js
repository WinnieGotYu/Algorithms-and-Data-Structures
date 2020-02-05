//Given a string, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s) {
  //create set to store seen characters 
  let seen = new Set();
  let longest = 0;
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    //while seen set has the character, delete each char until it doesn't
    while (seen.has(s[r])){
      seen.delete(s[l]);
      console.log('l is = ', l)
      //increment by 1 to continue deleting
      l++;
    }
    seen.add(s[r]);
    console.log('seen is = ', seen)
    longest = Math.max(longest, r - l + 1);
  }
  return longest;
};

console.log(lengthOfLongestSubstring('abcabcbb'))