function pigLatin(longStr){
  if(longStr.indexOf(' ')){
    let words = longStr.split(' ');
    for(let idx in words){
      words[idx] = changeWord(words[idx]);
    }
    return words.join(' ');
  } else {
    let changedWord = changedWord(longStr);
    return changedWord;
  }
}

function changeWord(str){
  const vowels = "aeiouyAEIOUY"
  if(vowels.includes(str[0])){return str + 'way'};
  for(let idx in str){
    if(vowels.includes(str[idx])){
      let result = str.slice(idx) + str.slice(0, idx) + 'ay';
      if(str.charAt(0) === str.charAt(0).toUpperCase()){
        result = result.charAt(0).toUpperCase() + result.slice(1).toLowerCase()
      }
      return result;
    }
  }
}

console.log(pigLatin('python')) // 'ythonpay'
console.log(pigLatin('Ruby')) // 'Ubyray'
console.log(pigLatin('browsers use javascript')) // 'owsersbray useway avascriptjay'
