"use strict"

//Callbacks
//A callback is a function that is passed to another function and that is called from within that same function

function foo() {
    console.log("I'm the callback");
}

// foo(); => calling the function
// foo => function object;

function bar(callback) {
    console.log("before the callback");
    callback();// => call the callback
    console.log("after the callback");
}

bar(foo); //we are passing in the function object foo

console.log(foo); // => this ([Function: foo]) is what we are passing into the function
console.log(foo()); // =>


//An example of a callback in abstraction
//setTimeout
//setTimeout(callback, ms)
//calls the callback


let cb = function() {
    console.log("3 seconds");
}
setTimeout(cb, 3000);



function helloWorld() {
    console.log("Hello World!");
}

function delayedHelloWorld() {
    setTimeout(helloWorld, 3000);
    console.log("This will be logged first");
}

delayedHelloWorld();

//SetInterval

function annoyingMeow() {
    console.log("Meow");
    setTimeout(annoyingMeow, 1000);// using setInterval will acutomatically do this for us
}

// annoyingMeow();
//"meow"
//waits 1 second
//"meow"
//set timeout => annoyingMeow
//wait 1 second
//meow
//set
//wait

function sayMeow() {
    console.log("meow");
}

setInterval(sayMeow, 1000);

setInterval(function () { //function object here has no name so it cannot be refered to later
    console.log("I am an anon mouse!");
}, 1000)


 //How to approach Callbacks

 //1. What parameters (args) will the function pass the callback?
 //2. When is the callback called?
 //3. How is the callback used?

 setTimeout(function () {
     console.log("Hellloooooooo!");
 }, 1000)


 //1. What parameters (args) will the function pass the callback?
 //None or no parameters passed

 //2. When is the callback called?
 //After given ms

 //3. How is the callback used?
 //waits for given ms then calls the function
