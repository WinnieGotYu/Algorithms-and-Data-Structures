/**Given n non-negative integers a1, a2, ..., an ,
 * where each represents a point at coordinate (i, ai).
 * n vertical lines are drawn such that the two endpoints
 * of line i is at (i, ai) and (i, 0). Find two lines,
 * which together with x-axis forms a container,
 * such that the container contains the most water.*/

 function mostWater(heights){
  let max = 0;
  let low = 0; 
  let high = heights.length -1;
  while(low < high){
    let area = (high - low) * Math.min(heights[low], heights[high]);
    if(max < area){max = area};
    heights[low] > heights[high] ? high-- : low++
  }
  return max;
 }

 console.log(mostWater([1,8,6,2,5,4,8,3,7])); //49