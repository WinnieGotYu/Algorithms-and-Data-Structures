/**Write an efficient function that takes
 *  stockPrices and returns the best profit 
 * I could have made from one purchase 
 * and one sale of one share of Apple stock yesterday. 
 * 
 * You can't just take the difference between the 
 * highest price and the lowest price, 
 * because the highest price might come 
 * before the lowest price. And you have to buy before you can sell.

What if the price goes down all day? In that case, the best profit will be negative.*/

function getMaxProfit(stockPrices) {
  //if less than one stock price, can not sell for profit
  if(stockPrices.length < 2){
    throw new Error('not enough stock prices')
  }

  // determine minPrice
  let minPrice = stockPrices[0];

  // determine maxProfit
  let maxProfit = stockPrices[1] - stockPrices[0];

  //loop through prices
  for(let i = 1; i < stockPrices.length; i++){
    const currPrice = stockPrices[i];
    //calculate profitDiff 
    const profitDiff = currPrice - minPrice;

    //update maxProfit if necessary
    maxProfit = Math.max(maxProfit, profitDiff);

    //update minPrice if necessary
    minPrice = Math.min(currPrice, minPrice);
  }

  return maxProfit
}

//test

let desc = 'price goes up then down';
let actual = getMaxProfit([1, 5, 3, 2]);
let expected = 4;
assertEqual(actual, expected, desc);

desc = 'price goes down then up';
actual = getMaxProfit([7, 2, 8, 9]);
expected = 7;
assertEqual(actual, expected, desc);

desc = 'price goes up all day';
actual = getMaxProfit([1, 6, 7, 9]);
expected = 8;
assertEqual(actual, expected, desc);

desc = 'price goes down all day';
actual = getMaxProfit([9, 7, 4, 1]);
expected = -2;
assertEqual(actual, expected, desc);

desc = 'price stays the same all day';
actual = getMaxProfit([1, 1, 1, 1]);
expected = 0;
assertEqual(actual, expected, desc);

desc = 'error with empty prices';
const emptyArray = () => (getMaxProfit([]));
assertThrowsError(emptyArray, desc);

desc = 'error with one price';
const onePrice = () => (getMaxProfit([1]));
assertThrowsError(onePrice, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}

