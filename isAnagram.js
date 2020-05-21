function isAnagram(str, str2){
  if(str.length !== str2.length) return false;

  let seenChars = {}; 

  for(let char of str){
    seenChars[char] = seenChars[char]
    ? seenChars[char] + 1
    : 1; 
  }
  
  for(let char of str2){
    if(seenChars[char] <= 0 || !seenChars[char]){
      return false;
    } else {
      seenChars[char]--;
    }
  }

  return true;
}

console.log(`anagram and nagaram: true = ${isAnagram("anagram", "nagaram")}`);
console.log(`a and b: false = ${isAnagram('a', 'b')}`);
