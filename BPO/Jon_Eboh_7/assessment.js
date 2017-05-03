/******************************************************************************
Write the function countAdjacentSums(arr, n) which takes an array and number.
It should count the number of times that two adjacent numbers in an array add up
to n.

Use Array#forEach.

Examples:
countAdjacentSums([1, 5, 1], 6) => 2
countAdjacentSums([7, 2, 4, 6], 7) => 0
countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) => 3
******************************************************************************/
function countAdjacentSums(arr, n){
  // your code here...
  //delcare counter variable
  //walk through the array adding the current value to the one to the right if at any point they add up to n iterate counter variable
  let counter = 0;
  cb = function (ele, idx) {
      if (arr[idx] + arr[idx +1] === n) {
          counter += 1;
      }
  }
  arr.forEach(cb);
  return counter;
}

console.log(countAdjacentSums([1, 5, 1], 6));// => 2
console.log(countAdjacentSums([7, 2, 4, 6], 7));// => 0
console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13));// => 3


/******************************************************************************
Write a function longestLetterStreak(str, searchLetters) that takes in 2 arguments:
 - str: A string of uppercase characters.
 - searchLetters: An array of uppercase single-character strings (i.e ["A", "F", "K"])

The function should return the length of the longest streak of letters (consecutive
letters) in the `str` that are in the `searchLetters`.

Examples:
longestLetterStreak("ACCA", ["C"]) => 2
longestLetterStreak("YACCADCA", ["C", "A"]) => 4
longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"]) => 3
longestLetterStreak("YYYYY", ["Z", "K", "Y"]) => 5
******************************************************************************/


//I got really caught up on this one for some reason.
//conceptually i wanted to turn this part of the question: (consecutive
// letters) in the `str` that are in the `searchLetters`.
//into code by walking through each char in the string.
//when I hit one that is in the searchLetters array i begin a while loop
//the while loop will continue so long as the next char is in the array and also next to one that is also in the array
//for each char that meets that condition i would interate a counter variable
//save each of those counter variables because the count would be reset to zero upon exiting the while loop
//then find the max value in an array of all the previous counter variables
//then return that max value

//I feel like there must be a simpler way to do this
//Anyways looking forward to your feedback Alvin!
//Thanks!
//Jon


// function isInSearchLetters(char) {
//     return searchLetters.includes(char);
// }

function longestLetterStreak(str, searchLetters){
    let countArr =[];
    for (var i = 0; i < str.length; i++) {
        if (searchLetters.includes( str.charAt[i])) {
            let j = 0;
            let counter = 0;
            while (searchLetters.includes( str.charAt[i + j])) {
                counter += 1;
                j +=1;

            }
            countArr.push(counter);
        }
    }

    return countArr;
  // your code here...
  //declare counter
  //break string into an array
  //make a method that looks to see if the current char is in the given array
  //it will return either true or false
  //while true iterate a counter variable
  //push counter into an array
  //return the max of that array

//
//   strArr = str.split("");
//   // console.log(strArr);
//   // let counter = 0;
//   let countArr = [];
//   // let counter = 0;
// //are you inside the array and next to somthing else inside the array
//   for (var i = 0; i < searchLetters.length; i++) {
//       let currentSearchLetter = searchLetters[i];
//      for (var i = 0; i < strArr.length; i++) {
//          let currentStrLetter = strArr[i];
//          if (currentSearchLetter === currentStrLetter && ) {
//              counter +=
//          }
//      }
//   }
//
//
//   return countArr;






  // cb = function (char) {
  //     let counter = 0;
  //     let i = 0;
  //     while (searchLetters.includes(strArr[i])) {
  //         i += 1;
  //         counter+=1
  //
  //     }
  //     countArr.push(counter);
  // }
  //
  // strArr.forEach(cb);


}


console.log(longestLetterStreak("ACCA", ["C"]));// => 2
console.log(longestLetterStreak("YACCADCA", ["C", "A"]));// => 4
console.log(longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"]));// => 3
console.log(longestLetterStreak("YYYYY", ["Z", "K", "Y"]));// => 5


/******************************************************************************
Write a function inPigLatin(sentence) that translates a sentence into its pig
latin equivalent. The rules for the translation are as follows:

1) For words that begin with consonants, all letters before the initial
vowel are placed at the end of the word sequence. Then, "ay" is added to the end.
  Examples:
  "pig" → "igpay"
  "banana" → "ananabay"
  "trash" → "ashtray

2) For words that begin with vowels, just add "yay" to the end
  Examples:
  "eat" → "eatyay"
  "omelet" → "omeletyay"
  "are" → "areyay"

!!! Words that were originally caplitalized must remained caplitalized
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
    let firstLetter = word[0];
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
        return word + "ay";
    }
}

function isVowel(char) {
    let vowels = ["a","e","i","o","u"];
    return (vowels.includes(char));
}

function matchCapitalization(oldWord, newWord) {
    let firstLetter = oldWord[0];
    if (firstLetter === firstLetter.toUpperCase()) {
        return (newWord[0].toUpperCase() + newWord.slice(1).toLowerCase());
    }else {
        return newWord;
    }
}

function inPigLatin(sentence) {
    let sentenceArr = sentence.split(" ");
    let pigLatinArr = [];

    cb = function(word) { // forEach is a function that accepts a callback and envokes the callback with the parameters ele, i, arr.. so word = ele here
        let pigLatinWord = wordInPigLatin(word);
        pigLatinArr.push(matchCapitalization(word, pigLatinWord));

    }
    sentenceArr.forEach(cb);

    return pigLatinArr.join(" ");

}

console.log(inPigLatin("Shmanthony is the best teacher"));
//Anthonyshmay isyay ethay estbay eachertay

console.log(inPigLatin("let us Dance"));
//etlay usyay Anceday

console.log(inPigLatin("this is the time of my life"));
//isthay isyay ethay imetay ofyay myay ifelay

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  inPigLatin : inPigLatin,
  countAdjacentSums : countAdjacentSums,
  longestLetterStreak : longestLetterStreak
};
