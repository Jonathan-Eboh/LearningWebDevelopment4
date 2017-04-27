/******************************************************************************
** Write a function #myIndexOf(array, ele) that takes an array and an element.
** Return the index of the element in the array, or -1 if it doesn't exist. Assume
** the `ele` will be a primitive data type (no arrays or objects). DO NOT USE
** Array.prototype.indexOf
** Examples:
** myIndexOf([1,2,3,4,5], 5) => 4
** myIndexOf(["a", "b", "c"], "a") => 0
** myIndexOf(["a", "b", "c"], "d") => -1
*/
"use strict"
function myIndexOf(array, ele){

    for (let i = 0; i < array.length; i++) {
        if (ele === array[i]) {
            return i;
        }
    }
    return -1;
}


Example:
console.log(myIndexOf([1,2,3,4,5], 5)); //=> 4
console.log(myIndexOf(["a", "b", "c"], "a")); //=> 0
console.log(myIndexOf(["a", "b", "c"], "d")); //=> -1


/******************************************************************************
** Write a function minMaxProduct(array) that returns the product between the
** largest value and the smallest value in the array. Assume `array` is an array of
** numbers. Assume an array of at least two numbers.
** Examples:
** minMaxProduct([0,1,2,3,4,5]) => 0
** minMaxProduct([5,4,3,2,1]) => 5
** minMaxProduct([4,2,5,1,-5]) => -25
*/
function minMaxProduct(array){
    // your code here...

    let min = array[0];
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max * min;
}


Examples:
console.log(minMaxProduct([0,1,2,3,4,5]));// => 0
console.log(minMaxProduct([5,4,3,2,1]));// => 5
console.log(minMaxProduct([4,2,5,1,-5]));// => -25


/******************************************************************************
** Write a function leastCommonMultiple(num1, num2) that returns the
** lowest number which is a multiple of both inputs.
** Examples:
** leastCommonMultiple(2, 3) => 6
** leastCommonMultiple(6, 10) => 30
** leastCommonMultiple(24, 26) => 312
*/

function leastCommonMultiple(num1, num2){
    // your code here...
    // let num = 1;
    let num = num1; //better way
    //even better figure out which one is larger start at that one
    // let num = Math.max(num1, num2);
    // console.log(Math.max(num1, num2)); This isnt working for some reason
    while (true) {
        if (num % num2 === 0) {
            //num % num1 === 0 && num % num2 === 0
            return num;
        }
        // num ++;
        num += num1;
    }
}

Examples:
console.log(leastCommonMultiple(2, 3));// => 6
console.log(leastCommonMultiple(6, 10));// => 30
console.log(leastCommonMultiple(24, 26));// => 312

/***************************************************************************
** Write a function arraysSumN(ary, n) which takes as ary a 2-dimensional
** array and as n a number. ary is an array of arrays of numbers. The
** function returns a new array of the inner arrays whose elements sum to n.
** Example 1:
** var ary1 = [ [0, 1], [2, 2, 0], [3, -2] ];
** var results1 = arraysSumN(ary1, 1);
** results1; // => [ [0, 1], [3, -2] ]
**
** Example 2:
** var ary2 = [ [3, 2, 1], [100], [0, 1, 2, 3, 100], [6] ];
** arraysSumN(ary2, 6); // => [ [3, 2, 1], [6] ]
***************************************************************************/

function arraysSumN(array, n) {
    // your code here...
    let indices = [];
    // your code here...
    for (var i = 0; i < array.length; i++) {
        let innerArrSum = 0;
        for (var j = 0; j < array[i].length; j++) {
            // let innerArrSum = 0;
            innerArrSum += array[i][j];
            // console.log("The sum of the elements of the inner array are: ",innerArrSum);
        }
        if (innerArrSum === n) {
            indices.push(array[i]);
        }
    }
    return indices;
}


// Example 1:
var ary1 = [ [0, 1], [2, 2, 0], [3, -2] ];
var results1 = arraysSumN(ary1, 1);
console.log(results1 );// => [ [0, 1], [3, -2] ]

// Example 2:
var ary2 = [ [3, 2, 1], [100], [0, 1, 2, 3, 100], [6] ];
console.log(arraysSumN(ary2, 6)); // => [ [3, 2, 1], [6] ]
/******************************************************************************
** Write a function magicCipher(sentence, cipher) that takes in an string(sentence)
** and an object(cipher). Return a string where every character is replaced with its
** cooresponding value in the cipher. If the character doesn't exist in the
** cipher, use the character.
** Examples:
** magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
** magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
** magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*/

function magicCipher(sentence, cipher){
    let magicSentence = "";

    for (var i = 0; i < sentence.length; i++) {
        let char = sentence[i]; //grabing each character for later use
        if (cipher[char]) { //if it exist it return true if not it returns undefined which is falsy in javascript
            magicSentence += cipher[char]; //add the value of the key
        }else {
            magicSentence += char //or else just add the current character
        }
    }

    return magicSentence;

}

Example:
console.log(magicCipher("add me on facebook" , { a : "c", d : "q"}));// => "cqq me on fccebook"
console.log(magicCipher("where are you?" , { v : "l", '?' : "!"}));// => "where are you!"
console.log(magicCipher("twmce" , { m : "n", t : "d", w : "a"}));// => "dance"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
    leastCommonMultiple : leastCommonMultiple,
    myIndexOf : myIndexOf,
    magicCipher : magicCipher,
    minMaxProduct : minMaxProduct,
    arraysSumN : arraysSumN
};
