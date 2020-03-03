// Create a function that takes a string and returns a
// new string with duplicates removed

/*
 const str = 'This is is a test test string';
 removeDuplicates(str); // 'This is a test string'
 */

 function removeDupe(str){
  const words = str.split(' ');
  const set = new Set(words)
  const result = [...set].join(' ');
  return result;
 }

 console.log(removeDupe("Hello Hello Am Am Am Am Winnie"));