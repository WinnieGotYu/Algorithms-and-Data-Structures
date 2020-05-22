/**You need to climb a staircase that has n steps, 
 * and you decide to get some extra exercise by jumping 
 * up the steps. You can cover at most k steps in a
 *  single jump. Return all the possible sequences of 
 * jumps that you could take to climb the staircase, sorted.

Example

For n = 4 and k = 2, the output should be

climbingStaircase(n, k) =
[[1, 1, 1, 1],
 [1, 1, 2],
 [1, 2, 1],
 [2, 1, 1],
 [2, 2]]
There are 4 steps in the staircase, and you can 
jump up 2 or fewer steps at a time. There are 5 
potential sequences in which you jump up the stairs 
either 2 or 1 at a time. 

Input:
n: 0
k: 0
Expected Output:
[[]]

Input:
n: 1
k: 1
Expected Output:
[[1]]

n: 7
k: 3
Expected Output:
[[1,1,1,1,1,1,1], 
 [1,1,1,1,1,2], 
 [1,1,1,1,2,1], 
 [1,1,1,1,3], 
 [1,1,1,2,1,1], 
 [1,1,1,2,2], 
 [1,1,1,3,1], 
 [1,1,2,1,1,1], 
 [1,1,2,1,2], 
 [1,1,2,2,1], 
 [1,1,2,3], 
 [1,1,3,1,1], 
 [1,1,3,2], 
 [1,2,1,1,1,1], 
 [1,2,1,1,2], 
 [1,2,1,2,1], 
 [1,2,1,3], 
 [1,2,2,1,1], 
 [1,2,2,2], 
 [1,2]]

*/

function climbingStaircase(n, k) {
  let output = [];
  function listWaysUntil(output, steps = [], k, n) {
    if (n === 0) {
      output.push([...steps]);
    } else {
      for (let i = 1; i < k + 1; i++) {
        if (i <= n) {
          steps.push(i);
          listWaysUntil(output, steps, k, n - i);
          steps.pop();
        }
      }
    }
  }
  listWaysUntil(output, [], k, n);
  return output;
}

console.log(`n=4, k=2: ${climbingStaircase(4, 2)} = 
 [[1, 1, 1, 1],
 [1, 1, 2],
 [1, 2, 1],
 [2, 1, 1],
 [2, 2]]`);
