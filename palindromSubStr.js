/**Given a string, your task is to count how 
 * many palindromic substrings in this string.

The substrings with different start indexes or 
end indexes are counted as different substrings 
even they consist of same characters.

Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
 

Example 2:

Input: "aaa"
Output: 6
Explanation: Six palindromic 
strings: "a", "a", "a", "aa", "aa", "aaa". */

// var countSubstrings = function(s) {

//   const n=s.length
//   let count = 0
//   for (let i=0; i<=2*n-1; i++){
//       let left = i/2
//       let right = left + i % 2
//       while (left >=0 && right < n && s.charAt(left) === s.charAt(right)){
//           count++
//           left--
//           right++
//       }
//   }
//   return count

// };

var countSubstrings = function (s) { // aaa
  let count = 0;
  let n = s.length; // 3
  for (let i = 0; i < n; i++) {
    let start = i; // 0 
    let end = i;   // 0
          // 0  >= 0 && 0 < 3 && s[0] === s[0]
    while (start >= 0 && end < n && s[start] === s[end]) {
      count++;
      start--;
      end++;
    }
    start = i;
    end = i + 1;
    while (start >= 0 && end < n && s[start] === s[end]) {
      count++;
      start--;
      end++;
    }
  }
  return count;
};

console.log(`'aaa': ${countSubstrings("aaa")} --- 6`);
