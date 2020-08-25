// Without using .flat(), create a function to flatten an array

// const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10];
// flatten(exampleArray); // [1,2,3,4,5,6,7,8,9,10]

// function flatten(arr) {
//   var res = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       //flatten returns an array (res)
//       // as long as array exist 
//       // will continue to concat old res
//       // to new res 
//       res = res.concat(flatten(arr[i]));
//     } else {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }
// console.log(flatten([1,2,[3,4, [5,6,7], 8], 9, 10]));


const flattenArr = (nestedarr) => {
  let res = [];
  for(let ele of nestedarr){
    if(Array.isArray(ele)){
      res = res.concat(flattenArr(ele));
    } else {
      res.push(ele);
    }
  }
  return res;
}

console.log(flattenArr([1,2,[3,4, [5,6,7], 8], 9, 10]));