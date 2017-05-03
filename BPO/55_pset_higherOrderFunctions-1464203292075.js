/*******************************************************************************
Write a function `createExpFunction(pow)` that accepts a positive integer. It returns
a function which will raise its input to the power specified by `pow` and returns
the value.

Example 1:
let powerTwo = createExpFunction(2);
powerTwo(2); // => 4
powerTwo(6); // => 36

Example 2:
let powerThree = createExpFunction(3);
powerThree(2); // => 8
powerThree(6); // => 216

Example 3:
let powerTen = createExpFunction(10);
powerTen(2); // => 1024
powerTen(6); // => 60466176
*******************************************************************************/

"use strict"

function createExpFunction(exponent) {
  // your code here...
  function power(base) {
     return Math.pow(base, exponent);
  }
  return power;
}

// Example 1:
let powerTwo = createExpFunction(2);
console.log(powerTwo(2)); // => 4
console.log(powerTwo(6)); // => 36

// Example 2:
let powerThree = createExpFunction(3);
console.log(powerThree(2)); // => 8
console.log(powerThree(6)); // => 216

// Example 3:
let powerTen = createExpFunction(10);
console.log(powerTen(2)); // => 1024
console.log(powerTen(6)); // => 60466176

/*******************************************************************************
Write a function mapCreator that takes a callback as an argument
and returns a new function. The new function should take an array as an argument
and return a new array, with each element 'mapped' to a new element
using the original callback.

Example:
let squareMapper = mapCreator(function (el) {
  return el * el;
});
squareMapper([1, 2, 3, 4]); //=> [1, 4, 9, 16]
*******************************************************************************/

// function mapCreator(callback) {
//   // your code here
//   function mapSetter(array) {
//     //   let newArr = [];
//       return callback();
//     //   return newArr;
//   }
//   return mapSetter;
// }


function mapCreator(callback) {
    return function (ary) {
        let results = [];
        for (let i = 0; i < ary.length; i++) {
            let el = ary[i];
            results.push(callback(el));
        }
        return results;
    }
    //got rid of return mapper here to save us declaring another variable
}

// Example:
let squareMapper = mapCreator(function (el) {
  return el * el;
});

console.log(squareMapper([1, 2, 3, 4])); //=> [1, 4, 9, 16]


/*******************************************************************************
Write a function objectSelect, which takes as arguments an object, and a callback,
and returns a new object where all the key value pairs return true,
when passed into the callback.

Example:
let obj = {
  one: "one",
  two: "something else",
  three: "three",
  four: "another thing."
};
let matchingPairs = objectSelect(obj, function (key, val) {
 return key === val;
});
matchingPairs; //=> {
  one: "one",
  three: "three"
}
*******************************************************************************/

// function objectSelect(obj, callback) {
//   // your code here
//   let results = {};
//   if (callback()) {
//
//
//       results[key] = val;
//   }
//   return results;
// }


function objectSelect(obj, callback) {
  // your code here
  let results = {};
  for (var key in obj) {
      let val = obj[key];
      if (callback(key, val)) {
          results[key] = val;
      }
  }
  return results;
}



// Example:
let obj = {
  one: "one",
  two: "something else",
  three: "three",
  four: "another thing."
};

let matchingPairs = objectSelect(obj, function (key, val) {
 return key === val;
});



console.log(matchingPairs);
// => {
//   one: "one",
//   three: "three"
// }
