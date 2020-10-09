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

const coins = [10, 6, 1];

const makeChange = (value) => { // 12 
  if(value === 0) return 0;
  let minCoins;
  coins.forEach( (coin) => { // coin is 10
    if(value - coin >= 0){ // 12 - 10 = 2 
      let currMinCoins = makeChange(value - coin); 
      if(minCoins === undefined || currMinCoins < minCoins){
        minCoins = currMinCoins;
      } 
    }
  })
  return minCoins + 1;
}

console.log(makeChange(12));