function calculate(s) { //s = '100 - 100 / 4 * 5'
  if (s == null || s.length === 0) return null;

  // remove space, /\s/g - a global search for whitespace characters in a string
  s = s.replace(/\s/g, '');
  
  let stk = [];
  let n = 0;
  let sign = '+';

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    // number
    // /\d/: it matches a digit (0-9) .test() returns true or false; 
    if (/\d/.test(c)) {n = n * 10 + Number(c)};  // e.g. '14' -> 1 * 10 + 4

    // sign or last number /\D/.test(c) non-digit characters
    if (/\D/.test(c) || i === s.length - 1) {
      if (sign === '-') stk.push(-n); // 2) stack is =  [ 100, -100 ]
      else if (sign === '+') stk.push(n); // 1) stack is =  [ 100 ]
      else if (sign === '*') stk.push(stk.pop() * n);  // 4) stack is =  [ 100, -125 ]
      else if (sign === '/') stk.push(Math.floor(stk.pop() / n)); // 3) stack is =  [ 100, -25 ]
      console.log(stk)
      //change sign to most recent sign
      sign = c;
      //reset n to 0; 
      n = 0;
    }
  }
  return stk.reduce((a, b) => a + b);
}

console.log(calculate('50 / 5 + 20 + 100 - 100 / 4 * 5')); //5 
console.log(calculate('80 / 7 * 50 - 500'));

