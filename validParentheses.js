/**Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
 * determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order. */

var validParentheses = function(s) {
  //odd length indicates 1 char is not a pair
  if(s.length %2 !== 0){return false};

  const stack = [];
  //iterate through s 
  for (let char of s) {
    //if opening parenthese, push closing to stack
    switch (char) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        //if char is closing, it should match the 
        //last char in the stack since it is in order
        if (char !== stack.pop()) {
          return false;
        }
    }
  }
  return stack.length === 0;
};


console.log(validParentheses("")); //True
console.log(validParentheses("()")); //True
console.log(validParentheses("([)]")); //False
console.log(validParentheses("{[]}")); //True

