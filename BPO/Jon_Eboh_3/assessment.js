/******************************************************************************
** Write a function #divisibleByFivePairSum(array), that takes an array of numbers.
** It should return an array of all the pairs of indices whose sum is a multiple of five.
** Example
** divisibleByFivePairSum([1, 5, 2, 0, 4]) => [ [ 0, 4 ], [ 1, 3 ] ]
** divisibleByFivePairSum([13, 22, 8, -3, 12]) => [[0, 1], [0, 3], [0, 4], [1, 2], [2, 3], [2, 4]]
*/

"use strict"

function divisibleByFivePairSum(array){
    // your code here...
    // declare a pairs array as empty
    //use nested for loop to...
    //walk through the array PER EACH element in the array
    // if at any point array[i]+array[j] % 5 === 0, then let pair = [i,j]
    //push pair to pairs array
    //return pairs array
    let pairs = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if ((array[i]+array[j]) % 5 === 0) {
                let pair = [i,j];
                pairs.push(pair);
            }
        }
    }
    return pairs
}

Example:
console.log(divisibleByFivePairSum([1, 5, 2, 0, 4]));// => [ [ 0, 4 ], [ 1, 3 ] ]
console.log(divisibleByFivePairSum([13, 22, 8, -3, 12]));// => [[0, 1], [0, 3], [0, 4], [1, 2], [2, 3], [2, 4]]



/******************************************************************************
** Write a function #myIndexOf(array, ele) that takes an array and an element.
** Return the index of the element in the array, or -1 if it doesn't exist. Assume
** the `ele` will be a primitive data type (no arrays or objects)
**
** DO NOT USE THE BUILT IN 'Array.prototype.indexOf' method!!!
**
** Example
** myIndexOf([1,2,3,4,5], 5) => 4
** myIndexOf(["a", "b", "c"], "a") => 0
** myIndexOf(["a", "b", "c"], "d") => -1
*/

function myIndexOf(array, ele){
    // your code here...
    //declare a tracker letiable set it equal to ele
    //check each element against the tracker
    //if array[i] === tracker then return "i"(so long as i started at 0)
    // else return -1
    let tracker = ele;
    for (let i = 0; i < array.length; i++) {
        if (tracker === array[i]) {
            return i;
        }
    }
    return -1
}
Example:
console.log(myIndexOf([1,2,3,4,5], 5)); //=> 4
console.log(myIndexOf(["a", "b", "c"], "a")); //=> 0
console.log(myIndexOf(["a", "b", "c"], "d")); //=> -1


/******************************************************************************
** Write a function #magicCipher(sentence, cipher) that takes in an string(sentence)
** and an object(cipher). Return a string where every character is replaced with its
** cooresponding value in the cipher. If the character doesn't exist in the
** cipher, use the character.
** Example
** magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
** magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
** magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*/

function magicCipher(sentence, cipher){
    // your code here...
    //loop through string
    //for every character loop through the keys if the key equals sentence[i]
    //then sentence[i] equals that keys value
    let newSentence = "";
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        for (let key in cipher) {
            if (char === key) {
                newSentence += cipher[key];
                // console.log(newSentence);
            }
            else  {
                newSentence += char
            }
        }
    }
    return newSentence;

}

Example:
console.log(magicCipher("add me on facebook" , { a : "c", d : "q"}));// => "cqq me on fccebook"
console.log(magicCipher("where are you?" , { v : "l", '?' : "!"}));// => "where are you!"
console.log(magicCipher("twmce" , { m : "n", t : "d", w : "a"}));// => "dance"

/******************************************************************************
** Write a function `minMaxDifference(array)` that returns the difference between the
** largest value and the smallest value in the array. Assume `array` is an array of
** numbers. Assume an array of at least two numbers.
** Example
** minMaxDifference([1,2,3,4,5]) => 4
** minMaxDifference([5,4,3,2,1]) => 4
** minMaxDifference([4,2,5,1,-5]) => 10
*/
function minMaxDifference(array){
    // your code here...
    //find the min
    //find the max
    //subtract min from max and return result
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
    return max - min;
}

Example:
console.log(minMaxDifference([1,2,3,4,5]));// => 4
console.log(minMaxDifference([5,4,3,2,1]));// => 4
console.log(minMaxDifference([4,2,5,1,-5]));// => 10


/******************************************************************************
** Write a function #dynamicFizzBuzz(max, num1, num2) that returns an array
** of numbers up to the max. Each number should be either divisible by num1 or num2,
** BUT NOT BOTH.
** Example
** dynamicFizzBuzz(20, 5, 3) => [3, 5, 6, 9, 10, 12, 18]
** dynamicFizzBuzz(20, 4, 6) => [4, 6, 8, 16, 18]
*/
function dynamicFizzBuzz(max, num1, num2){
    // your code here...
    //standard fizzbuzz except instead of 3 and 5 we can add a level of arbitrition with...
    //our input num1 and num2
    let dynamicArr = [];
    for (let i = 0; i < max; i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            continue;
        }
        if (i % num1 === 0) {
            dynamicArr.push(i);
        }
        if (i % num2 === 0) {
            dynamicArr.push(i);

        }
    }
    return dynamicArr;
}

Example:
console.log(dynamicFizzBuzz(20, 5, 3));// => [3, 5, 6, 9, 10, 12, 18]
console.log(dynamicFizzBuzz(20, 4, 6));// => [4, 6, 8, 16, 18]


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
    divisibleByFivePairSum : divisibleByFivePairSum,
    myIndexOf : myIndexOf,
    magicCipher : magicCipher,
    minMaxDifference : minMaxDifference,
    dynamicFizzBuzz : dynamicFizzBuzz
};
