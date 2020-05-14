function fib(n) {
  if (n <= 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}

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
