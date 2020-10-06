// // Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// // a simple multiplication fn
// const times10 = (n) => {
//   return 10 * n;
// };

// console.log("~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~");
// console.log("times10 returns:", times10(9));

// // Task 2: Use an object to cache the results of your times10 function.
// // protip 1: Create a function that checks if the value for n has been calculated before.
// // protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object.

// const memoizedClosureTimes10 = () => {
//   const cache = new Map(); // Using a closure, making cahce variable private

//   const addToCache = (n) => {
//     if (cache.get(n)) {
//       return cache.get(n);
//     } else {
//       let current = times10(n);
//       cache.set(n, current);
//       return current;
//     }
//   }

//   return addToCache
// };
// const memoClosureTimes10 = memoizedClosureTimes10(); // create an instances of the fxn

// console.log("~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~");
// console.log("Task 2 calculated value:", memoClosureTimes10(9)); // calculated
// console.log("Task 2 cached value:", memoClosureTimes10(9)); // cached

const times10 = (n) => (n * 10);
// Task 4: Make your memo function generic and accept the times10 function as a callback rather than defining the n * 10 logic inside the if/else or pulling it in from the global scope.

// protip: Take advantage of the fact that parameters are saved in the closure as well, just like the cache from the previous example.
const memoize = (callback) => {
  const cache = new Map(); 

  const addToCache = (n) => {
    if(cache.get(n)){
      return cache.get(n);
    } else {
      let result = callback(n);
      cache.set(n, result);
      return result;
    }
  }
}

const memoizedTimes10 = memoize(times10);

console.log('~~~~~~~~~~~~~~TASK 4~~~~~~~~~~~~~~');
try {
  console.log('Task 4 calculated value:', memoizedTimes10(9));	// calculated
  console.log('Task 4 cached value:', memoizedTimes10(9));	// cached
} catch(e) {
  console.error('Task 4:', e)
}