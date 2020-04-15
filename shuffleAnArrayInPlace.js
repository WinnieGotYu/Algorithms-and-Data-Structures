/** Shuffle a set of numbers without duplicates.

Example:

// Init an array with set 1, 2, and 3.
int[] nums = {1,2,3};
Solution solution = new Solution(nums);

// Shuffle the array [1,2,3] and return its result. 
Any permutation of [1,2,3] must equally likely to be returned.
solution.shuffle();

// Resets the array back to its original configuration [1,2,3].
solution.reset();

// Returns the random shuffling of array [1,2,3].
solution.shuffle(); */

class Solution {
  constructor(nums){
    this.nums = nums;
  }

  reset(){
    return this.nums; 
  }

  shuffle() {
    //make copy of nums
    const copyOfNums = [...this.nums];
    const len = copyOfNums.length;
    
    //iterate through copy of nums 
    for(let i = 0; i < len; i++){
      // create random new position
      // must ensure once an item is placed at an index it can't be moved
      const randomIdx = Math.floor(Math.random() * (len - i)) + i;
      // swap elements at current index with random index
      [copyOfNums[i], copyOfNums[randomIdx]] = [copyOfNums[randomIdx], copyOfNums[i]]
      // return random number
    }
    return copyOfNums;
  }
}

const sample = new Solution([1, 2, 3, 4, 5, 6]);
console.log('Initial array: ', sample.nums);
console.log('Shuffled array: ', sample.shuffle());
console.log('reset', sample.reset());
