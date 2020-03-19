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

function palindromePermutation(str){
  let noSpace = str.toLowerCase().split(' ').join('');
  let obj = {};
  let counter = 0; 
  for(let char of noSpace){
    obj[char] ? obj[char] += 1 : obj[char] = 1; 
  }
  for(let key in obj){
    if(obj[key] % 2 === 1){
      counter += 1;
    }
  }
  return counter <= 1; 
}

console.log(palindromePermutation('Tact Coa')); //true 
console.log(palindromePermutation('Tact Coaa')); //false 
console.log(palindromePermutation('code')); //false 
console.log(palindromePermutation('aab')); //true
console.log(palindromePermutation('carerac')); //true
