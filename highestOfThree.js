/**Given an array of integers,
 *  find the highest product you 
 * can get from three of the integers. 
 * 
 * ie:   const arrayOfInts = [1, 10, -5, 1, -100];
 * highestProduct = 10 * -5 * -100 = 5000 */

function highestProductOf3(arrayofInts){
  //array lenght < 3 throw error
  if(arrayofInts.length < 3){
    throw new Error("Array needs to have at least three numbers");
  }
  
  // set highest value
  let highest = Math.max(arrayofInts[0], arrayofInts[1]);
  // set lowest value 
  let lowest = Math.min(arrayofInts[0], arrayofInts[1]);
  
  // set highestProductOf2 
  let highestProductOf2 = arrayofInts[0] * arrayofInts[1];
  // set lowestProductOf2 
  let lowestProductOf2 = arrayofInts[0] * arrayofInts[1];
  
  // set highestProductOf3
  let highestProductOf3 = arrayofInts[0] * arrayofInts[1] * arrayofInts[2]; 
  
  // iterate through array starting at index 3
  for(let i = 2; i < arrayofInts.length; i++){
    const current = arrayofInts[i]
    // check highestProductOf3 
    highestProductOf3 = Math.max(
      highestProductOf3,
      current * highestProductOf2, 
      current * lowestProductOf2
    )

    // check highestProductOf2
    highestProductOf2 = Math.max(
      highestProductOf2, 
      current * highest, 
      current * lowest
    )
    
    // check lowestProductOf2
    lowestProductOf2 = Math.min(
      lowestProductOf2, 
      current * highest, 
      current * lowest
    )

    // update highest value
    highest = Math.max(highest, current);

    // update lowest value 
    lowest = Math.min(lowest, current)
  }
  return highestProductOf3;
}

//test
let desc = "includes negatives"; 
let actual = highestProductOf3([1, 10, -5, 1, -100]);
let expected = 5000;
assertEqual(actual, expected, desc)

desc = 'longer array';
actual = highestProductOf3([6, 1, 3, 5, 7, 8, 2]);
expected = 336;
assertEqual(actual, expected, desc);

desc = 'array has one negative';
actual = highestProductOf3([-5, 4, 8, 2, 3]);
expected = 96;
assertEqual(actual, expected, desc);

desc = 'array has two negatives';
actual = highestProductOf3([-10, 1, 3, 2, -10]);
expected = 300;
assertEqual(actual, expected, desc);

desc = 'array is all negatives';
actual = highestProductOf3([-5, -1, -3, -2]);
expected = -6;
assertEqual(actual, expected, desc);

desc = 'error with empty array';
const emptyArray = () => (highestProductOf3([]));
assertThrowsError(emptyArray, desc);

desc = 'error with one number';
const oneNumber = () => (highestProductOf3([1]));
assertThrowsError(oneNumber, desc);

desc = 'error with two numbers';
const twoNumber = () => (highestProductOf3([1, 1]));
assertThrowsError(twoNumber, desc);


function assertEqual(a, b, desc){
  if(a === b){
    console.log(`${desc} ✅`)
  } else {
    console.log(`${desc}, ${a} is not ${b} ❌`)
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... ❌`);
  } catch (e) {
    console.log(`${desc} ... ✅`);
  }
}