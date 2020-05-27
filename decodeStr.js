function decodeStr(s){
  let multiply = [], 
    repeatStr = [],
    times = '', 
    resultStr = '';

  for(let char of s){
    if(!isNaN(char)){
      times += char;
    } else if(char === '['){
      multiply.push(times);
      repeatStr.push(resultStr);
      times = '';
      resultStr = '';
    } else if(char === ']'){
      const count = multiply.pop(), 
        str = repeatStr.pop();
      resultStr = str + repeatStr;
    } else {
      repeatStr += char;
    }
  }

  return resultStr;
}