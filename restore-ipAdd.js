/** Given a string containing only digits, restore it by returning all possible valid IP address combinations.

Example:

Input: "25525511135"
Output: ["255.255.11.135", "255.255.111.35"] */

function restoreIpAddresses(s) {
  const result = [];
  let n = s.length;
  //start at i = 0 b/c want substring method
  for (let i = 1; i < n && i < 4; i++) {
    let first = s.slice(0, i); // 2, 25, 255
    if (!isValid(first)) {
      continue;
    }

    for (let j = 1; i + j < n && j < 4; j++) {
      let second = s.slice(i, i + j);
      if (!isValid(second)) {
        continue;
      }
      for (let k = 1; i + j + k < n && k < 4; k++) {
        let third = s.slice(i + j, i + j + k);
        let fourth = s.slice(i + j + k);
        if (!isValid(third) || !isValid(fourth)) {
          continue;
        }
        let combined = first + "." + second + "." + third + "." + fourth;
        result.push(combined);
      }
    }
  }
  return result;

  function isValid(s) {
    if (s.length > 3) {
      return false;
    }
    // 0 is valid but 00 and 000 is not valid
    if (s[0] === "0" && s.length > 1) {
      return false;
    }
    return Number(s) >= 0 && Number(s) <= 255;
  }
}

restoreIpAddresses("25525511135");
