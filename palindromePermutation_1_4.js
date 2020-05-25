/** Given a string, determine if a permutation of the string could form a palindrome.

Example 1:

Input: "code"
Output: false
Example 2:

Input: "aab"
Output: true
Example 3:

Input: "carerac"
Output: true
 * 
 * permutation does not need to be a valid dictionary word
*/

function hasPalindromePermutation(theString) {

  // Check if any permutation of the input is a palindrome
  //create set to keep track of seen chars
  const seen = new Set();
  for(let char of theString){
    if(seen.has(char)){
      seen.delete(char);
    } else {
      seen.add(char);
    }
  }
  return seen.size <= 1;
}

//test
let desc = "permutation with odd number of chars";
assertEqual(hasPalindromePermutation('civic'), true, desc);

desc = 'permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabccbdd'), true, desc);

desc = 'no permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcd'), false, desc);

desc = 'no permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabbcd'), false, desc);

desc = 'empty string';
assertEqual(hasPalindromePermutation(''), true, desc);

desc = 'one character string ';
assertEqual(hasPalindromePermutation('a'), true, desc);

function assertEqual(actual, expected, description){
  if(actual === expected){
    console.log(`"${description}" ✅`);
  } else {
    console.log(`${description} ❌`);
  }
}