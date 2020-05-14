function collectOddValues(nums){
  let oddValues = []; 

  if(nums.length === 0) return oddValues; 

  if(nums[0] % 2 !== 0){
    oddValues.push(nums[0]);
  }

  oddValues = oddValues.concat(collectOddValues(nums.slice(1))); 

  return oddValues; 
}


// TEST CASES 

let input = [1,2,3,4,5];
let expect = [1,3,5];
let actual = collectOddValues(input); 
assertsEquals(expect, actual); 

function assertsEquals(a, b){
  a.toString() === b.toString()
  ? console.log(`${input} PASSED, expect: ${expect}, acutual: ${actual}`)
  : console.log(`${input} FAILED, expect: ${expect}, acutual: ${actual}`);
}