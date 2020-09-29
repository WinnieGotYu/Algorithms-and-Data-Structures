/**
 * Function Description

Complete the function minimumSwaps in the editor below. 
It must return an integer representing 
the minimum number of swaps to sort the array.

minimumSwaps has the following parameter(s):

arr: an unordered array of integers
Input Format

The first line contains an integer, , the size of .
The second line contains  space-separated integers .

Constraints

Output Format

Return the minimum number of swaps to sort the given array.

Sample Input 0

4
4 3 1 2

Sample Output 0

3

 */

const minSwap = (arr) => {
    const arr2 = arr.slice().sort((a, b) => a - b); // Make copy of arr and sort ascending
    const indexes = new Map(); 
    arr.forEach((v, i) => indexes.set(v, i)); // Add integer and index to Map
    let swaps = 0;
    arr.forEach((v, i) => { 
        if (v !== arr2[i]) { // if value at this index is not equal to sorted value at same index
            swaps++; 
            arr[indexes.get(arr2[i])] = v; // get index of that value from Map and  
            arr[i] = arr2[i];
            indexes.set(v, indexes.get(arr2[i]));
        }
    });
    return swaps;
}

console.log(minSwap([4,3,1,2])); // 3