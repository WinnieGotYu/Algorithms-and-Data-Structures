// given two strings, count number of 
// times smaller string appears in longer string
// O(n^2)

function strCount(long, short){
  let counter = 0; 
  for(let i = 0; i < long.length; i++){
    for(let j = 0; j < short.length; j++){
      if(long[i+j] !== short[j]) break;
      if(j === short.length - 1) counter++;
    }
  }
  return counter;
}

console.log(`'happy days','da': ${strCount('happy days', 'da')} is 1`);