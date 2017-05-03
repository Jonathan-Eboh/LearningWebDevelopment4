
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


function wordInPigLatin(word) {
    //translates words into pig latin
    let vowels = ["a","e","i","o","u"];
    let firstLetter = word[0]; //grabbing the first letter of every word
    if (isVowel(firstLetter)) {
        return word + "yay";
    }else {
        for (let idx = 0; idx < word.length; idx++) {
            let char = word[idx];
            if (isVowel(char)) {
                let wordStart = word.slice(0, idx);
                let wordEnd = word.slice(idx);
                return wordEnd + wordStart + "ay";
            }
        }
        return word + "ay"; //this is a catch for words that have no vowels under our rules such as the word my (y is not counted as a vowel) both of the previous returns are wrapped in for loops that are contingent on vowels so we need somthing for this edge case
    }
}

function isVowel(char) {
    let vowels = ["a","e","i","o","u"];
    return (vowels.includes(char));
}

function matchCapitalization(oldWord, newWord) {
    let firstLetter = oldWord[0];
    if (firstLetter === firstLetter.toUpperCase()) {
        return (newWord[0].toUpperCase() + newWord.slice(1).toLowerCase());// first letter will be caplitailzed
    }else {
        return newWord;
    }
}

function inPigLatin(sentence) {
    let sentenceArr = sentence.split(" ");
    let pigLatinArr = [];

    myForEach(sentenceArr, function(word) { //using word works here because of the deffiniton of myForEach its a function that accepts a callback and envokes the callback with the parameters ele, i, arr..
        let pigLatinWord = wordInPigLatin(word);
        pigLatinArr.push(matchCapitalization(word, pigLatinWord));

    })

    return pigLatinArr.join(" ");

}

console.log(inPigLatin("Shmanthony is the best teacher"));
//Anthonyshmay isyay ethay estbay eachertay

console.log(inPigLatin("let us Dance"));
//etlay usyay Anceday

console.log(inPigLatin("this is the time of my life"));
//isthay isyay ethay imetay ofyay myay ifelay


// console.log(wordInPigLatin("eat"));
// console.log(wordInPigLatin("cat"));
// console.log(wordInPigLatin("pig"));
// console.log(wordInPigLatin("my"));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
    mySelect : mySelect,
    myForEach : myForEach,
    inPigLatin : inPigLatin
};
