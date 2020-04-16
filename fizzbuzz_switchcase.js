/**FizzBuzz question: Print numbers from 1 to n. 0
 * Print Fizz instead of numbers divisible by 3.
 * Print Buzz instead of numbers divisible by 5.
 *  Print FizzBuzz instead of numbers divisible by both 3 and 5. */

function fizzBuzz(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        result.push("FizzBuzz");
        break;
      case i % 3 === 0:
        result.push("Fizz");
        break;
      case i % 5 === 0:
        result.push("Buzz");
        break;
      default:
        result.push(i);
    }
  }
  return result;
}

let desc = "Test number 15";
let actual = fizzBuzz(15);
let expect = [
  1,
  2,
  "Fizz",
  4,
  "Buzz",
  "Fizz",
  7,
  8,
  "Fizz",
  "Buzz",
  11,
  "Fizz",
  13,
  14,
  "FizzBuzz",
];
assertEqual(JSON.stringify(expect), JSON.stringify(actual), desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`"${desc}", Expected: ${a}, Output: ${b} ✅`);
  } else {
    console.log(`"${desc}", Expected: ${a} Output: ${b} ❌`);
  }
}
