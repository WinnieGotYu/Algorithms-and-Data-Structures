/** given two strings, write a function to check if str is one edit away 
 * (pale, ale) => true;
 * (pales, pale) => true;
 * (pale, bake) => false;
 * 
*/

function oneAway(str1, str2){
  let diffCount = 0; 
  let obj1 = {};
  let obj2 = {};
  //create character frequency counters 
  for(let char of str1){
    obj1[char] ? obj1[char] += 1 : obj1[char] = 1; 
  }
  for(let char of str2){
    obj2[char] ? obj2[char] += 1 : obj2[char] = 1; 
  }
  //compare frequency counters 
  for(let key in obj1){
    if(obj1[key] !== obj2[key]) diffCount++;
  }
  return diffCount === 1; 
}

console.log(oneAway('pale', 'ale')) //true;
console.log(oneAway("pales", "pale")) //true;
console.log(oneAway('pale', 'bake')) //false;
console.log(oneAway('hello', 'world')) //false;