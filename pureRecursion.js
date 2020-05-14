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

// function flattenArr(nestedArr) {
//   let flatten = [];
//   for (let ele of nestedArr) {
//     if (Array.isArray(ele)) {
//       flatten = flatten.concat(flattenArr(ele));
//     } else {
//       flatten.push(ele);
//     }
//   }
//   return flatten;
// }

// console.log(
//   `[[[[1], [[[2]]], [[[[[[[3]]]]]]]]]] ... ${flattenArr([
//     [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]],
//   ])} is [1,2,3]`
// );

// function nestedEvenSum(nestedObj){
//   let sum = 0;
//   for(let key in nestedObj){
//     if(typeof nestedObj[key] === 'object'){
//       sum += nestedEvenSum(nestedObj[key]);
//     } else if(typeof nestedObj[key] === 'number' && nestedObj[key] % 2 === 0){
//       sum += nestedObj[key];
//     }
//   }
//   return sum;
// }

// const obj2 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };

// const obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }

// console.log(`obj1: ${nestedEvenSum(obj1)} is 6`);
// console.log(`obj2: ${nestedEvenSum(obj2)} is 10`);

function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  console.log(`this is res, ${res}`)
  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);
  console.log(`this is first slice ${array.slice(0, -1)}`)
  console.log(`this is slice[0] ${array.slice(array.length-1)[0]}`)
  console.log(`this is slice[0][0] ${array.slice(array.length-1)[0][0]}`)
  res.push(string);
  return res;
}
console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
// capitalizeFirst(['hello','taco','banana', 'bob', 'joe']); // ['Car','Taco','Banana']
