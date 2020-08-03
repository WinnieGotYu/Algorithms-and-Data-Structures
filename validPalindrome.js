/**
 * Given a string, determine if it is a palindrome, 
 * considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
 

Constraints:

s consists only of printable ASCII characters.
 */

 const validPalindrome = (s) => {
   const modified = s.toLowerCase().replace(/[^a-z0-9]/g, "");
   if(modified.length < 1) return true;
   let left = 0; 
   let right = modified.length - 1; 
   while(left < right){
     if(modified[left] !== modified[right]){
       return false;
     } else {
       left++; 
       right--;
     }
   }
   return true;
 }

 console.log(validPalindrome("A man, a plan, a canal: Panama"));