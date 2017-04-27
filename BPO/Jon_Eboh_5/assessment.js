/******************************************************************************
Write a function myForEach(arr, cb) that accepts an array and a callback. This
should behave just like Array#forEach. Passing the callback every element, its
corresponding index, and the array itself. It should return undefined. DO NOT USE
THE BUILT IN ARRAY#FOREACH METHOD
Example
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
// 5 is at position 0 in array [5,12,-3]
// 12 is at position 1 in array [5,12,-3]
// -3 is at position 2 in array [5,12,-3]
// undefined //return value


/******************************************************************************
Write a function mySelect(arr, cb) that accepts an array and a callback. This
It should pass the callback every element, its corresponding index, and the array
itself. Returns an array containing all elements of arr for which the given callback
returns a truthy value. Feel free to use your myForEach function you wrote earlier.
Example
> mySelect([5,12,-22,-3], function(ele, i, arr){
..  return ele % 2 === 0;
..})
[13, -22] //return value //This should be [12, -22]?

> mySelect([5,12,-22,-3], function(ele, i, arr){
..  return i % 2 === 0;
..})
[5, -22] //return value
******************************************************************************/
function mySelect (arr, callback) {
    // your code here...
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];

        if (callback(ele, i, arr)) {
            newArr.push(ele);
        }

    }
    return newArr;
}

console.log(mySelect([5,12,-22,-3], function(ele, i, arr){
    return ele % 2 === 0;
}));
//[13, -22] //return value //This should be [12, -22]?

console.log(mySelect([5,12,-22,-3], function(ele, i, arr){
    return i % 2 === 0;
}));
//[5, -22] //return value


/******************************************************************************
Write a function inPigLatin(sentence) that translates a sentence into its pig
latin equivalent. The rules for the translation are as follows:

1) For words that begin with consonant sounds, all letters before the initial
vowel are placed at the end of the word sequence. Then, "ay" is added to the end.
Examples
"pig" → "igpay"
"banana" → "ananabay"
"trash" → "ashtray

2) For words that begin with vowel sounds, just adds "yay" to the end
Examples
"eat" → "eatyay"
"omelet" → "omeletyay"
"are" → "areyay"

!!! Words that were originally caplitailzed must remained caplitailzed
!!! Assume no punctuation
!!! 'y' is not a vowel

Examples:
> inPigLatin("Shmanthony is the best teacher")
Anthonyshmay isyay ethay estbay eachertay

> inPigLatin("let us Dance")
etlay usyay Anceday

> inPigLatin("this is the time of my life")
isthay isyay ethay imetay ofyay myay ifelay
*******************************************************************************/


function inPigLatin(sentence){
    // your code here...
    //if first letter is vowel run a function
    //if first letter is consonant run some other function
    //return sentence
    let vowels = ["a","e","i","o","u"];
    let pigArr = sentence.split(" ");
    for (let i = 0; i < pigArr.length; i++) {
        let pigWord = pigArr[i]; //grab individual word for later use
        if (vowels.includes(pigWord[0])) {
            //run vowel verison of function on word
            pigArr[i] = pigWordVowel(pigWord);
            // console.log("cat", pigWord);
        }else {
            //run consonat verison of function on word
            pigArr[i] = pigWordConsonant(pigWord);
            // console.log("dog", pigWord);
        }
    }
    return pigArr.join(" ");
}

function pigWordConsonant(word) { //this is not working correctly....
    let vowels = ["a","e","i","o","u"];

    for (let i = 0; i < word.length; i++) {
        let pigChar = word[i];
        if (vowels.includes(pigChar)) {
            let pigAy = "ay";
            let pigEndOne = word.slice(0, i);//exclusive of the last value here

            return (word + pigEndOne + pigAy);
        }
    }
}

function pigWordVowel(word) { //this is working....
    return word += "yay";
}


console.log(inPigLatin("Shmanthony is the best teacher"));
//Anthonyshmay isyay ethay estbay eachertay

console.log(inPigLatin("let us Dance"));
//etlay usyay Anceday

console.log(inPigLatin("this is the time of my life"));
//isthay isyay ethay imetay ofyay myay ifelay


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
    mySelect : mySelect,
    myForEach : myForEach,
    inPigLatin : inPigLatin
};
