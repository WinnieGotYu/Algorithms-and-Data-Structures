/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 
 * Given an array of distinct integers candidates 
 * and a target integer target, return a list of 
 * all unique combinations of candidates where the 
 * chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates
 an unlimited number of times. Two combinations 
 are unique if the frequency of at least one of the chosen numbers is different.

 

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3:

Input: candidates = [2], target = 1
Output: []
Example 4:

Input: candidates = [1], target = 1
Output: [[1]]
Example 5:

Input: candidates = [1], target = 2
Output: [[1,1]]
 */

var combinationSum = function(candidates, target) {
  var result = [];
  
  var solution = (start, end, sum, temp) => {
      if(sum > target) return; 
      
      if(sum === target){
          result.push([...temp]);
      }
      
      for(let i = start; i < end; i++){
          temp.push(candidates[i]);
          solution(i, end, sum + candidates[i], temp); 
          temp.pop();
      }
  }
  
  //      (st, end, sum,temp)
  solution(0, candidates.length, 0, []);
  return result;
};