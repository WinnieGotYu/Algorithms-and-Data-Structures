function fib(n){
  if(n <= 0) return 0; 
  if(n <= 2) return 1; 
  const fibNums = [0,1,1];
  for(let i = 3; i <= n; i++){
    fibNums[i] = fibNums[i-1] + fibNums[i-2];
  }
  return fibNums[n];
}

console.log(`1: ${fib(1)} = 1`);
console.log(`0: ${fib(0)} = 0`);
console.log(`5: ${fib(5)} = 5`);
console.log(`10: ${fib(10)} = 55`);
