/** Write a function that takes:

an array of unsortedScores
the highestPossibleScore in the game
and returns a sorted array of scores in less than O(n\lg{n})O(nlgn) time.

const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
// returns [91, 89, 65, 53, 41, 37]
*/

function sortScores(unorderedScores, highestPossibleScore){
  // create frequency counter for score
  const scoreCounter = {};
  unorderedScores.forEach(score => {
    scoreCounter[score] ? scoreCounter[score]++ : scoreCounter[score] = 1; 
  })
  const sortedScores = [];
  // iterate through frequency counter and populate score
  for(let score = highestPossibleScore; score >= 0;  score--){
    const count = scoreCounter[score];
    
    for(let time = 0; time < count; time++){
      sortedScores.push(score);
    }
  }
  return sortedScores; 
}

let desc = "many scores"; 
let actual = sortScores([37, 89, 41, 65, 91, 53], 100);
let expect = [91, 89, 65, 53, 41, 37];
// actual and expect have two separate addresses in memory 
// so they will not equal eachother (even though the values are equal.)
assertEqual(JSON.stringify(actual),JSON.stringify(expect), desc);

function assertEqual(a, b, desc){
  if(a === b){
    console.log(`"${desc}", Expected: ${a}, Output: ${b} ✅`)
  } else {
    console.log(`"${desc}", Expected: ${a} Output: ${b} ❌`)
  }
}
