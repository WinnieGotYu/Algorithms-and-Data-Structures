/** Given M length arr with N elements
 *  make all possible combinations
 */

function combiner(...args) {  
  let output = [];
  let MAX = args.length - 1;
  function buildSubArray(arr, i) {
    for (let j = 0; j < args[i].length; j++) {
      // let arrCopy = [...arr];
      let arrCopy = [...arr];
      arrCopy.push(args[i][j]);
      if (i === MAX) {
        output.push(arrCopy)
      } else {
        buildSubArray(arrCopy, i+1);
      }
    }
  }
  buildSubArray([], 0);
  return output;
}