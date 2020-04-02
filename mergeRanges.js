/**Write a function mergeRanges() 
 * that takes an array of multiple 
 * meeting time ranges and returns an array of condensed ranges.
 * 
 *   [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]

  [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]*/

function mergeRanges(meetings){

  //deep copy meetings object 
  const meetingsCopy = JSON.parse(JSON.stringify(meetings));

  //sort meetings by startTime  
  const sortedMeetings = meetingsCopy.sort((a, b) => { return a.startTime - b.startTime});

  const merged = [sortedMeetings[0]];
  
  for(let i in sortedMeetings){
    const currMeeting = sortedMeetings[i];
    const prevMeeting = merged[merged.length - 1];

    if(currMeeting.startTime <= prevMeeting.endTime){
      prevMeeting.endTime = Math.max(currMeeting.endTime, prevMeeting.endTime);
    } else {
      merged.push(currMeeting)
    }
  }

  return merged;
}


const allMeets = [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]; 

console.log(mergeRanges(allMeets));