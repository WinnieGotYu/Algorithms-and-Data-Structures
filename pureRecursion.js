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

function reverse(str) {
  if (str.length <= 1) {
    return str;
  }
  console.log(`this is curr string ${str}`);
  return reverse(str.slice(1)) + str[0];
}

let input = "awesome";
let output = reverse(input);
let expect = "emosewa";
assertEqual(expect, output);
function assertEqual(a, b) {
  a === b
    ? console.log(`${input} PASS, ${output} = ${expect}`)
    : console.log(`${input} FAILED, ${output} != ${expect}`);
}
