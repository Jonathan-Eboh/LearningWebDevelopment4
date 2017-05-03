/******************************************************************************
Write a function myForEach(array, cb) that accepts an array and a callback. This
should behave just like Array#forEach. Passing the callback every element, its
corresponding index, and the array itself. It should return undefined.

Do NOT use the built-in Array#forEach method!

Example:
> myForEach([5,12,-3], function(ele, i, arr){
..  console.log(ele + " is at position " + i + " in array " + arr);
..})
5 is at position 0 in array [5,12,-3]
12 is at position 1 in array [5,12,-3]
-3 is at position 2 in array [5,12,-3]
undefined //return value
******************************************************************************/
"use strict"

function myForEach (arr, callback) {
    // your code here...
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i]; //this is the only thing we dont explicitly have (that is somthing called ele which represents the value at a given index in an array)
        callback(ele, i, arr); //this is where we envoke our callback with the appropriate parameters passed in
    }
}


console.log(myForEach([5,12,-3], function(ele, i, arr){
    console.log(ele + " is at position " + i + " in array " + "["+arr+"]");
}));

/******************************************************************************
Write a function myMap(array, cb) that accepts an array and a callback.
It should pass the callback every element, its corresponding index, and the array
itself. It should return a new array where each element in the new array is the
return value of the callback. Feel free to use the myForEach function you
wrote earlier or Array#forEach.

Do not use a for or while loop!

Examples:
> myMap([1, 2, 3], function(ele, i, arr){
..  return ele * i;
..})
[0, 2, 6] //return value

> myMap([1, 2, 3], function(ele, i, arr){
..  return ("This element is " + ele);
..})
["This element is 1", "This element is 2", "This element is 3"] //return value
******************************************************************************/
function myMap(arr, callback) {
    // your code here...
    let mappedResults = [];
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i]
        let mappedItem = callback(ele, i, arr);
        mappedResults.push(mappedItem);
    }

    return mappedResults;
}

Examples:
console.log(myMap([1, 2, 3], function(ele, i, arr){
  return ele * i;
}));
// [0, 2, 6] //return value

console.log(myMap([1, 2, 3], function(ele, i, arr){
  return ("This element is " + ele);
}));
// ["This element is 1", "This element is 2", "This element is 3"] //return value

/******************************************************************************
Write a function passingStudents(array) that accepts an array of student objects.
It should iterate through the list of students and return an array of the names
of all the students who have an average grade of at least 70.

Use only Array.prototype.forEach to iterate through any array!

Example:
> let students = [
  {
    "name": "Kush",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {
    "name": "Ned",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Haseeb",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }];

> passingStudents(students)
[ 'Kush', 'Ned' ] //return value
******************************************************************************/
function passingStudents(array) {
  // your code here...
  // need to iterate through students
  //need to iterate through grades array
  //add up all the scores and keep track of the sum
  // compare that sum to 70...
  //if 70 or greater push into an array
  //else do not push
  //return said array
  let passingArr = []; //---need this to ultimately hold the names of the students that are considered passing
  myForEach(array, function(ele,  i , arr) { //first loop
      let sum = 0;
    //   console.log("cat", array[i].grades); //works
      let grades = array[i].grades;
    //   console.log("grades array: ", grades); //works
      myForEach(grades, function (ele, i, arr) { // second loop
          sum += ele.score;
      });
      let avgScore = sum / grades.length;
      if (avgScore > 70) {
          passingArr.push(array[i].name);
      }
  });
  return passingArr;
}


let students = [
  {
    "name": "Kush",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {
    "name": "Ned",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Haseeb",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }];

console.log(passingStudents(students));
// [ 'Kush', 'Ned' ] //return value

/******************************************************************************
Write a function laligatSequence(base, n)

A number's laligat sum is the the sum of all the prime numbers less than or equal
to that number.

For example, the laligat sum of 10 is: 2 + 3 + 5 + 7 = 17

We can use the laligat sum to define a special sequence, called the laligat
sequence. The laligat sequence of a number begins with the number itself. The
second number in the sequence is the first number's laligat sum, the third
number is the second number's laligat sum, and so on.

For example, the first 4 numbers in the laligat sequence of 10 are: 10, 17, 58, 381.

The first argument is laligatSequence is the number that starts the sequence.
The second argument is the length of the sequence.

Examples:
> laligatSequence(10, 4)
[ 10, 17, 58, 381 ]

> laligatSequence(5, 2)
[ 5, 10 ]
*******************************************************************************/
function laligatSequence(base, n) {
    let sequence = [];
    if (n === 0) {
        return sequence
    }else {
        sequence = [base]; //because we know we need to return an array and base will always be the first element in the array given that the array is longer than length 0
    }

    while (sequence.length < n) { //because we only want to do this n times
        //add laligat sum of the last number to the sequence
        let lastNum = sequence[sequence.length - 1];//since we need the last number in the sequence this is how we dynamically aquire that
        let laligat = laligatSum(lastNum);//---first abstraction
        sequence.push(laligat);
    }
    return sequence;
}

function laligatSum(num) {
    let sum = 0;
    for (let possiblePrime = 2; possiblePrime <= num; possiblePrime++) {// because of our login in isPrime we need to start possiblePrime at 2
        //need to check to see if i is prime
        if (isPrime(possiblePrime)) { //---is prime is our second abstraction
            sum += possiblePrime;
        }
    }
    return sum;
}

function isPrime(num) {
    for (let i = 2; i < num; i++) { //start at two because 0 and 1 are not prime numbers the first prime number is 2
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


Examples:
console.log(laligatSequence(10, 4));
// [ 10, 17, 58, 381 ]

console.log(laligatSequence(5, 2));
// [ 5, 10 ]

console.log(laligatSequence(5, 0));


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  myMap : myMap,
  myForEach : myForEach,
  passingStudents: passingStudents,
  laligatSequence : laligatSequence
};
