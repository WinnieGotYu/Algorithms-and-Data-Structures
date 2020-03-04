// Implement Function.prototype.bind()

/*
    const foo = function() {
        console.log(this.bar);
    }
    let baz = foo.bind({bar: 'hello'})
    baz(); // Hello
*/

//trying to return a function that has a different context 

Function.prototype.bind = function(context) {
  //bind(fn, context)
  //when function is invoked, we want this to be accessible, 
  // so that this isn't attached to annon fn. 
  const _this = this;

  return function(){
    _this.call(context);
  }

}

// OR 

function bind(fn, context){

  return function(){
    fn.call(context);
  }

}

//--------------------------------------------------------------------
//NOTES: 

var car = { 
  registrationNumber: "GA12345",
  brand: "Toyota",

  displayDetails: function(){
      console.log(this.registrationNumber + " " + this.brand);
  }
}

car.displayDetails(); // GA12345 Toyota

var myCarDetails =  car.displayDetails;
myCarDetails(); //Well, this won’t work as the “this” will be now assigned to the global context

var myCarDetails = car.displayDetails.bind(car); 
myCarDetails(); // GA12345 Toyota

//rewrite car obj 

var car = { 
  registrationNumber: "GA12345",
  brand: "Toyota"
}

function displayDetails(ownerName) {
  console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
}

var myCarDetails = car.displayDetails.bind(car, "Vivian"); // Vivian, this is your car: GA12345 Toyota

//use apply() fn 
displayDetails.apply(car, ["Vivian"]); // Vivian, this is your car: GA12345 Toyota

//use call() fn 
displayDetails.call(car, "Vivian"); // Vivian, this is your car: GA12345 Toyota
