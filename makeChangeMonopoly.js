// const makeChange = (coins, amount) => {
//   // Sort the coins
//   coins.sort((a,b) => b - a); 
//   let coinTotal = 0; 
//   let i = 0; 
//   while( amount > 0) {
//     if(coins[i] <= amount){
//       amount -= coins[i];
//       coinTotal++;
//     } else {
//       i++;
//     }
//   }
//   return coinTotal; 
// };



// const makeChange = (value) => { // 12 
//   const coins = [10, 6, 1];
//   if(value === 0) return 0;
//   let minCoins;
//   coins.forEach( (coin) => { // coin is 10
//     if(value - coin >= 0){ // 12 - 10 = 2 
//       let currMinCoins = makeChange(value - coin); 
//       if(minCoins === undefined || currMinCoins < minCoins){
//         minCoins = currMinCoins;
//       } 
//     }
//   })
//   return minCoins + 1;
// }

const makeChangeDP = (c, cache = {0:0}) =>{
  const coins = [10, 6 , 1];
  if(cache[c]) return cache[c]; // Return value if in cache
  let minCoins = -1;

  // Find The best coin
  coins.forEach( coin => {
    if(c - coin >= 0){
      let currMinCoins = makeChangeDP(c-coin, cache);
      // Set min coins if parameters are met
      if(minCoins === -1 || currMinCoins < minCoins){
        minCoins = currMinCoins;
      }
    }
  })
  // Save value into cache
  cache[c] = minCoins + 1;
  return cache[c];
}

console.log(makeChangeDP(12));
