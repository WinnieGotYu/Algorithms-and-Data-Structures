/** Given two strings, write a method to decide if one is a permutation of the other 
 * 
 * ie: ('cat', 'tac') => true 
 * ('apple', 'banana') => false 
*/

function checkPermutation(str1, str2){
  if(str1.length !== str2.length) return false;

  let sorted1 = str1.split('').sort().join('');
  let sorted2 = str2.split('').sort().join('');

  for(let i in sorted1){
    if(sorted1[i] !== sorted2[i]) return false;
  }

  return true;
}

console.log(checkPermutation('cat', 'tac')); //true 
console.log(checkPermutation('apple', 'banana')); //false 

