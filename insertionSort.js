const insertionSort = (arr) => {
  // start index at 1, assume element at 
  // index 0 is in the correct position
  for(let i = 1; i < arr.length; i++){
    let j = i - 1;
    let current = arr[i];
    while(j >= 0 && arr[j] > current){
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = current;
  }
  return arr;
}
