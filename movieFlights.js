/**Write a function that takes an integer 
 * flightLength (in minutes) and an array of 
 * integers movieLengths (in minutes) and 
 * returns a boolean indicating whether there 
 * are two numbers in movieLengths whose sum equals flightLength. 
 * 
 * Assume your users will watch exactly two movies
Don't make your users watch the same movie twice*/

function canTwoMoviesFillFlight(movieLengths, flightLength) {
  //movie lengths we've seen through iteration
  let seenMovies = new Set();

  //loop through movieLenghts and add to seenMovies
  for(let movie of movieLengths){
    const secondMovie = flightLength - movie;
    
    //if seenMovie has the difference return true
    if(seenMovies.has(secondMovie)) return true;
    
    seenMovies.add(movie);
  }

  return false;
}

// Tests

let desc = 'short flight';
let actual = canTwoMoviesFillFlight([2, 4], 1);
let expected = false;
assertEquals(actual, expected, desc);

desc = 'long flight';
actual = canTwoMoviesFillFlight([2, 4], 6);
expected = true;
assertEquals(actual, expected, desc);

desc = 'one movie half flight length';
actual = canTwoMoviesFillFlight([3, 8], 6);
expected = false;
assertEquals(actual, expected, desc);

desc = 'two movies half flight length';
actual = canTwoMoviesFillFlight([3, 8, 3], 6);
expected = true;
assertEquals(actual, expected, desc);

desc = 'lots of possible pairs';
actual = canTwoMoviesFillFlight([1, 2, 3, 4, 5, 6], 7);
expected = true;
assertEquals(actual, expected, desc);

desc = 'not using first movie';
actual = canTwoMoviesFillFlight([4, 3, 2], 5);
expected = true;
assertEquals(actual, expected, desc);

desc = 'only one movie';
actual = canTwoMoviesFillFlight([6], 6);
expected = false;
assertEquals(actual, expected, desc);

desc = 'no movies';
actual = canTwoMoviesFillFlight([], 2);
expected = false;
assertEquals(actual, expected, desc);

function assertEquals(act, exp, desc) {
  if (act === exp) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${act} != ${exp}`);
  }
}