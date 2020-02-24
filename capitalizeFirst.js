/** 'hello I am winnie' to 'Hello I Am Winnie */

function capitalizeFirst(str){
  let arr = str.split(' '); 
  for(let i in arr){
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join(' ');
}

console.log(capitalizeFirst('hello I am winnie'));