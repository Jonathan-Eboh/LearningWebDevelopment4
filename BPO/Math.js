/*

Problem Set: Math

Write a function randomValidIndex(array) that takes in an array as input. The function should return an index that is with the range 0 - array.length

Test your code by running the following code:

let arr = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i < 1000; i += 1) {
let idx = randomValidIndex(arr);

if(idx < 0 || idx >= arr.length) {
console.log("NOT WORKING. Found an out of bounds index:", idx);
}
}
--------------------------------------------------------------------
Write a function oddsUpEvensDown(arr) that takes in an array of numbers as input and returns an array where every number at an even index is rounded down, every number at an odd index is rounded up.

let arr = [2.1, 3.01, 3.7, -1.2];
oddsUpEvensDown(arr); //=> [2, 4, 3, -1]

--------------------------------------------------------------------


Write a function randomNumberGenerator(min, range), which takes a minimum value and a range, it should return random whole numbers in the specified range starting at the minimum value.

randomNumberGenerator(1, 10); //=> 1
randomNumberGenerator(1, 10); //=> 7
randomNumberGenerator(1, 10); //=> 10
randomNumberGenerator(1, 10); //=> 3
randomNumberGenerator(30, 1); //=> 30
randomNumberGenerator(30, 1); //=> 31
randomNumberGenerator(100, 100); //=> 100
randomNumberGenerator(100, 100); //=> 200
randomNumberGenerator(100, 100); //=> 136
randomNumberGenerator(100, 100); //=> 175

*/
"use strict"

function randomValidIndex(array) {
    let randIndex = Math.floor(Math.random() * array.length);
    //the plus one is key here because Math.random is exclusive of the upper bound but I guess the problem doesnt want that
    //pay attention to language like from start up to end, or within the range 0 to end
    return randIndex;

}


let a = [1,2,3,4,5];
let b = [1,2,3,4,5,6,7,8];
let c = [1,2,3];
console.log(randomValidIndex(a));
console.log(randomValidIndex(b));
console.log(randomValidIndex(c));


let arr = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i < 1000; i += 1) {
    let idx = randomValidIndex(arr);

    if(idx < 0 || idx >= arr.length) {
        console.log("NOT WORKING. Found an out of bounds index:", idx);
    }
}
//--------------------------------------------------------------------

function oddsUpEvensDown(array) {
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            array[i] = Math.floor(array[i]);
        }else {
            array[i] = Math.ceil(array[i]);

        }
    }
    return array;
}


let arr2 = [2.1, 3.01, 3.7, -1.2];
console.log(oddsUpEvensDown(arr2)); //=> [2, 4, 3, -1]


//--------------------------------------------------------------------

function randomNumberGenerator(min, range) {

    let randNum = Math.floor(Math.random() * range) + min;
    //to include 31 and 200 just add one to the rang (range + 1)
    return randNum;
}

console.log("random number generator");
console.log(randomNumberGenerator(1, 10)); //=> 1
console.log(randomNumberGenerator(1, 10)); //=> 7
console.log(randomNumberGenerator(1, 10)); //=> 10
console.log(randomNumberGenerator(1, 10)); //=> 3
console.log(randomNumberGenerator(30, 1)); //=> 30
console.log(randomNumberGenerator(30, 1)); //=> 31
console.log(randomNumberGenerator(100, 100)); //=> 100
console.log(randomNumberGenerator(100, 100)); //=> 200
console.log(randomNumberGenerator(100, 100)); //=> 136
console.log(randomNumberGenerator(100, 100)); //=> 175


console.log("Testing the outputs below");
console.log(randomNumberGenerator(30, 1)); //=> 30
console.log(randomNumberGenerator(30, 1)); //=> 31
