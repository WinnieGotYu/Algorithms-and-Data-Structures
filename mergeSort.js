/**Implement the merge sort algorithm. */

const merge = (arr1, arr2) => {
  const merged = [];
  let i = 0; 
  let j = 0;  

  while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
      merged.push(arr1[i]);
      i++
    }
    if(arr2[j] < arr1[i]){
      merged.push(arr2[j]);
      j++
    }
  }

  while(i < arr1.length){
    merged.push(arr1[i]);
    i++;
  }

  while(j < arr2.length){
    merged.push(arr2[j]);
    j++;
  }

  return merged; 
}

const mergeSort = (list) => {
  if(list.length <= 1) return list;
  const mid = Math.floor(list.length / 2);
  const left = list.slice(0, mid); 
  const right = list.slice(mid);
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}


console.log(mergeSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8])); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
console.log(mergeSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(mergeSort([10, 24, 76, 73, 72, 1, 9])); // [1,9,10,24,72,73,76]
