/**
 * 
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
 */

// space = O(n * 2) = O(n)

// var generateParenthesis = function(n) {
//   const result = [];

//   const buildResult = (open = 0, close = 0, str = '') => {
//     if (str.length === n * 2) {
//       result.push(str);
//       return;
//     }
//     if (open < n) buildResult(open + 1, close, `${str}(`);
//     if (open > close) buildResult(open, close + 1, `${str})`);
//   }
  
//   buildResult();
//   return result;
// };

function generateParenthesis(n){
  const result = [];
  
  function buildResult(open = 0, close = 0, str=''){
    if(str.length === n *2){
      result.push(str);
      return;
    }

    if(open < n) buildResult(open + 1, close, str +'('); 
    if(open > close) buildResult(open, close + 1, str + ')');
  }

  buildResult();
  return result; 
}

// TEST

test(
  "3",
  generateParenthesis(3).toString(),
  ["((()))", "(()())", "(())()", "()(())", "()()()"].toString()
);

function test(input, a, b) {
  a === b
    ? console.log(`${input}: PASS`)
    : console.log(`${input}: FAIL, ${a} != ${b}`);
}
