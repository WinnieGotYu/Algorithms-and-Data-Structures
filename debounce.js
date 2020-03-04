// Implement debounce
// debounce - slowing something down 
// i.e auto complete search, should not fire a request at every letter
// set debounce 500ms 

// fn1 = debounce(fn, time);
// fn1()// 


//debounceFn()
//debounceFn()
//debounceFn()
//debounceFn()
//debounceFn() only this one will fire

function debounce(fn, time){
  let setTimeoutId; 

  return function(){

    // cancels any other setTimeout
    if(setTimeoutId){
      clearTimeout(setTimeoutId);
    }
    // setTimeout reutnrs an Id 
    //think of it as a timerID, 
    //which uniquely identify a timer, 
    //so that you can reset by clearTimeout(timerID)
    setTimeoutId = setTimeout( () => {
      //invoke another fn when timer runs out 
      fn.apply(this, arguments);
      //ends loop
      setTimeoutId = null; 
    }, time)

  }
}