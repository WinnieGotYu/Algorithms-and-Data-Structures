/**Given a non-negative integer, 
 * you could swap two digits at 
 * most once to get the maximum 
 * valued number. Return the maximum 
 * valued number you could get.

Example 1:
Input: 2736
Output: 7236
Explanation: Swap the number 2 and the number 7.
Example 2:
Input: 9973
Output: 9973
Explanation: No swap. */

function maxSwap(num){
  const nums = num.toString().split('');

  for(let i = 0; i < nums.length; i++){
    let currMaxNum = nums[i];
    let index = i;

    // find highest number
    for(let j = i + 1; j < nums.length; j++){
      if(nums[j] > currMaxNum){
        currMaxNum = nums[j];
        index = j;
      }
    }

    if(currMaxNum !== nums[i]){
      [nums[i], nums[index]] = [nums[index], nums[i]];
      return parseInt(nums.join(''));
    }
  }

  return num;
}

// TEST 

test('12390', maxSwap(12390), 92310);
test('1100', maxSwap(1100), 1100);

function test(input,a,b){
  a === b
  ? console.log(`${input}: PASS`)
  : console.log(`${input}: FAIL, ${a} != ${b}`);
}


