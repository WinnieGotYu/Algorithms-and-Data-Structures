// Return index of target or -1 if none
const unsortedSearch = (arr, target) => {
  let left = 0, 
      right = arr.length - 1;
  while(left <= right){
    if(left === right) return arr[left] === target ? left : -1;
    if(arr[left] === target){
      return left;
    } else {
      left++;
    };
    if(arr[right] === target){
      return right;
    } else {
      right--;
    }
  }
}

console.log(unsortedSearch([9,8,4,7,3,1,2],7)); // 3
console.log(unsortedSearch([9,8,4,7,3,1,2],0)); // -1
console.log(unsortedSearch([-1, 0, 3, 5, 9, 12], 9)); // -1

