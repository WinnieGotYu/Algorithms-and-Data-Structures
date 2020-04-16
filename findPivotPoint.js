/**Write a function for finding the index of the "rotation point */

function findRotationPoint(words){
  // declare high and low indexes
  let lowIndex = 0; 
  let highIndex = words.length - 1; 
  // start while loop 
  while(lowIndex < highIndex){
    // calculate middle index
    const middleIndex = Math.floor(lowIndex + ((highIndex - lowIndex) / 2 ));
    // check if middle is greater than highest
    // if yes, high = middle
    // else, low = middle 
    words[middleIndex] > words[highIndex]
     ? lowIndex = middleIndex + 1
     : highIndex = middleIndex

    if(lowIndex === highIndex) break;
  }

    return lowIndex; 
}

let desc = 'small array';
let actual = findRotationPoint(['cape', 'cake']);
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'medium array';
actual = findRotationPoint(['grape', 'orange', 'plum', 'radish', 'apple']);
expected = 4;
assertEquals(actual, expected, desc);

desc = 'large array';
actual = findRotationPoint(['ptolemaic', 'retrograde', 'supplant',
  'undulate', 'xenoepist', 'asymptote',
  'babka', 'banoffee', 'engender',
  'karpatka', 'othellolagkage']);
expected = 5;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc){
  if(a === b){
    console.log(`"${desc}", Expected: ${a}, Output: ${b} ✅`)
  } else {
    console.log(`"${desc}", Expected: ${a} Output: ${b} ❌`)
  }
}