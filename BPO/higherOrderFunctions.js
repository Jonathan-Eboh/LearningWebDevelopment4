"use strict"

function createAdder(num1) {
    let f = function(num2) {
        return num1 + num2
    }

    return f;
}


console.log(createAdder(2)); //this is [Function: f]

let addTwo = createAdder(2); //the return of createAdder(n) is stored in the variable
let addThree = createAdder(3);//these values...
let addFour = createAdder(4);//...are saved in their respective variables

//This is called a closure in javascript

console.log(addTwo(1)); //then we take the function that createAdder returned (that is now stored in the respective variable and we run that variable name as a function with an argument passed into it)

console.log(addThree(1));
console.log(addFour(1));

console.log(addTwo(2)); // => evaluates to 4
console.log(addTwo(40)); // evaluates to 42

let addTen = createAdder(10);
console.log(addTen(2)); // => evaluates to 12
console.log(addTen(40)); // evaluates to 50
