/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (!intervals.length) {
    return [];
  }
  // make deep copy of intervals
  const intervalsCopy = JSON.parse(JSON.stringify(intervals));

  // sort by first integer
  const sorted = intervalsCopy.sort((a, b) => {
    // -1 for a puts a's index lower than b
    // 1 for b puts b's index lower than a
    // 0 keep the same
    let result = a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
    return result;
  });
  // initiate result variable
  const result = [sorted[0]];

  // iterate through sorted copy of intervals
  for (let i = 0; i < sorted.length; i++) {
    // initiate current
    const current = sorted[i];
    // initiate last
    const previous = result[result.length - 1];

    // if curr starttime is less than lastEndtime
    if (current[0] <= previous[1]) {
      // lastEndtime = higher of the two
      previous[1] = Math.max(current[1], previous[1]);
    } else {
      // push to result
      result.push(current);
    }
  }
  return result;
};

let desc = "two pairs of integers";
let actual = merge([
  [1, 4],
  [0, 4],
]);
let expect = [[0, 4]];
assertEqual(JSON.stringify(expect), JSON.stringify(actual), desc);

desc = "three pairs of integers";
actual = merge([
  [4, 5],
  [1, 4],
  [0, 1],
]);
expect = [[0, 5]];
assertEqual(JSON.stringify(expect), JSON.stringify(actual), desc);

desc = "four pairs of integers";
actual = merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);
expect = [
  [1, 6],
  [8, 10],
  [15, 18],
];
assertEqual(JSON.stringify(expect), JSON.stringify(actual), desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`"${desc}", Expected: ${a}, Output: ${b} ✅`);
  } else {
    console.log(`"${desc}", Expected: ${a} Output: ${b} ❌`);
  }
}
