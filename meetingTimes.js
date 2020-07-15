/**input:[[0,30], [5,10], [15,20]] output: false 
 * input: [[7,10], [2,4]] output: false
 * given an array of meeting intervals determine if a person can attend all meetings
*/

function attendMeetings(intervals){
  if(intervals.length < 2) return true;
  intervals.sort((a,b) => a[0] - b[0]);
  
  let end = intervals[0][1];

  for(let i = 1; i < intervals.length; i++){
    if(end > intervals[i][0]) return false;
    if(end < intervals[i][1]) end = intervals[i][0]; 
  }
  return true;
}


console.log(`[[0,30], [5,10], [15,20]]: ${attendMeetings([[0,30], [5,10], [15,20]])} = false`);
console.log(`[[7,10], [2,4]]: ${attendMeetings([[[7,10], [2,4]]])} = true`);