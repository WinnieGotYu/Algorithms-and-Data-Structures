// function collectOddValues(nums){
//   let oddValues = [];

//   if(nums.length === 0) return oddValues;

//   if(nums[0] % 2 !== 0){
//     oddValues.push(nums[0]);
//   }

//   oddValues = oddValues.concat(collectOddValues(nums.slice(1)));

//   return oddValues;
// }

// // TEST CASES

// let input = [1,2,3,4,5];
// let expect = [1,3,5];
// let actual = collectOddValues(input);
// assertsEquals(expect, actual);

// function assertsEquals(a, b){
//   a.toString() === b.toString()
//   ? console.log(`${input} PASSED, expect: ${expect}, acutual: ${actual}`)
//   : console.log(`${input} FAILED, expect: ${expect}, acutual: ${actual}`);
// }

// function reverse(str) {
//   if (str.length <= 1) {
//     return str;
//   }
//   console.log(`this is curr string ${str}`);
//   return reverse(str.slice(1)) + str[0];
// }

// let input = "awesome";
// let output = reverse(input);
// let expect = "emosewa";
// assertEqual(expect, output);
// function assertEqual(a, b) {
//   a === b
//     ? console.log(`${input} PASS, ${output} = ${expect}`)
//     : console.log(`${input} FAILED, ${output} != ${expect}`);
// }

// function isPalindrome(str){
//   if(str.length === 1) return true;
//   if(str.length === 2) return str[0] === str[1];
//   if(str[0] === str.slice(-1)){
//     return isPalindrome(str.slice(1, -1));
//   }
//   return false
// }

// console.log(`'tacocat' ... ${isPalindrome('tacocat')} is true`);
// console.log(`'awesome' ... ${isPalindrome('awesome')} is false`);

// function someRecursive(arr, isOdd){
//   if(arr.length === 0){
//     return false;
//   }
//   if(isOdd(arr[0])){
//     return true;
//   }
//   return someRecursive(arr.splice(1), isOdd);
// }
// function isOdd(int){
//   return int % 2  !== 0;
// }

// console.log(`[1,2,3,4] ... ${someRecursive([1,2,3,4], isOdd)} is true`);
// console.log(`[4,6,8] ... ${someRecursive([4,6,8], isOdd)} is false`);

function flattenArr(nestedArr) {
  let flatten = [];
  for (let ele of nestedArr) {
    if (Array.isArray(ele)) {
      flatten = flatten.concat(flattenArr(ele));
    } else {
      flatten.push(ele);
    }
  }
  return flatten;
}

console.log(
  `[[[[1], [[[2]]], [[[[[[[3]]]]]]]]]] ... ${flattenArr([
    [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]],
  ])} is [1,2,3]`
);
