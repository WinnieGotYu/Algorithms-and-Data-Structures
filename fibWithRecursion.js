const fib = (n) => {
  let memo = { 0: 0, 1: 1 };

  const helper = (x) => {
    if (x <= 1) {
      return x;
    } else if (memo[x]) {
      return memo[x];
    } else {
      memo[x] = helper(x - 1) + helper(x - 2); 
      return memo[x];
    }
  };

  return helper(n);
};

//TEST

let input = 10;
let expect = 55;
let output = fib(input);
testCase(expect, output);

input = 35;
expect = 9227465;
output = fib(input);
testCase(expect, output);

function testCase(a, b) {
  a === b
    ? console.log(`${input}: PASS ${a} = ${b}`)
    : console.log(`${input}: FAIL ${a} != ${b}`);
}
