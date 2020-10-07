// // Basic implementation (pivot is the first element of the array)
function quicksort(array) {
  if (array.length === 0) return []; // Base case for recursion to exit 

  var left = [],
    right = [],
    pivot = array[0]; // Pivot is the first element of the array

  for (var i = 1; i < array.length; i++) { // Starts i at 1 since we are using index 0 as pivot
    if (array[i] < pivot) {
      left.push(array[i]); // Push values less than pivot to left arr
    } else {
      right.push(array[i]); // Push values greater than pivot to left arr
    }
  }
  return quicksort(left).concat(pivot, quicksort(right)); // concat the arrays left + (pivot, right)
}

// Create an array to sort
// var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 12, 8, 11];


// var items = [5,3,7,6,2,9];

// function swap(items, leftIndex, rightIndex){
//     var temp = items[leftIndex];
//     items[leftIndex] = items[rightIndex];
//     items[rightIndex] = temp;
// }

// function partition(items, left, right) {
//     var pivot   = items[Math.floor((right + left) / 2)], //middle element
//         i       = left, //left pointer
//         j       = right; //right pointer
//     while (i <= j) {
//         while (items[i] < pivot) {
//             i++;
//         }
//         while (items[j] > pivot) {
//             j--;
//         }
//         if (i <= j) {
//             swap(items, i, j); //sawpping two elements
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// function quickSort(items, left, right) {
//     var index;
//     if (items.length > 1) {
//         index = partition(items, left, right); //index returned from partition
//         if (left < index - 1) { //more elements on the left side of the pivot
//             quickSort(items, left, index - 1);
//         }
//         if (index < right) { //more elements on the right side of the pivot
//             quickSort(items, index, right);
//         }
//     }
//     return items;
// }
// // first call to quick sort
// var sortedArray = quickSort(items, 0, items.length - 1);
// console.log(sortedArray); //prints [2,3,5,6,7,9]


// function pivot(arr, st=0, end=arr.length){
//     let pivot = arr[st];
//     let swap = st;

//     for(let i=st+1; i< end; i++){
//         if(pivot > arr[i]){
//             swap++;
//             [arr[swap], arr[i]] = [arr[i], arr[swap]];
//         }
//     }

//     [arr[st], arr[swap]] = [arr[swap], arr[st]];
//     return swap;
// }
console.log(quicksort([2, 0, 0, 0, 1, 0]));
// console.log(quicksort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
