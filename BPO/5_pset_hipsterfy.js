/****************************************************************
Write a function hipsterfy(sentence) that takes takes a string
containing several words as input. Remove the last vowel from
each word. 'y' is not a vowel.

> hipsterfy("proper");
"propr"

> hipsterfy("proper tonic panther");
"propr tonc panthr"

> hipsterfy("towel flicker banana");
"towl flickr banan"

> hipsterfy("runner anaconda");
"runnr anacond"

> hipsterfy("turtle cheeseburger fries");
"turtl cheeseburgr fris"
****************************************************************/
"use strict"
// function hipsterfy_2(sentence) {
//     // read the problem wrong was trying to remove the last vowel from the string
//     // instead of removing the last vowel from each word
//     // your code here...
//     //make vowels array
//     //In order to remove the last vowel from each string
//     //walk backwards through the string and remove the first one
//     //then break out of the loop
//     let vowels = ["a","e","i","o","u"];
//     let counter = 0;
//     let newSentence = "";
//     for (var i = sentence.length - 1; i >= 0; i--) {
//         if (counter === 0 && vowels.includes(sentence[i])) {
//             counter += 1;
//             newSentence = sentence.replace(sentence[i], "");
//             // console.log(sentence);
//         }
//     }
//     return newSentence;
//
// }

function hipsterfy(sentence) {
//*split sentence into words => String.prototype.split("")
//*be able to tell wether a letter is a vowel or not => vowels = ["a","e","i","o","u"];
//find the last vowel in a word => start the end of string and find the first vowel
// we need to be able to delete the last vowel from the word => slice twice and concat
//*join the words => join(" ")

    let words = sentence.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = deleteLastVowel(words[i]);
    }
    // console.log("got to hipsterfy");
    return words.join(" ");
}


function deleteLastVowel(word) {
    let i = word.length - 1
    // while(i >= 0 && !isVowel(word[i])) { //This is magic lol - we start at the last char in the word or (word.length - 1), then we only step to the left (i--) IF our i is currently larger than 0 AND our current char (word[i]) is NOT a vowel (!isVowel())
    // //This way when the while loop ends we will be at our last vowel in the word because we dont step anymore to the left if we are currently on a vowel
    //     i--;
    // }
    while (i >= 0) {
        if (isVowel(word[i])) {
            let left = word.slice(0, i); //this works because this is non inclusive of the upper bound
            let right = word.slice(i + 1, word.length);
            // console.log("got to deleteLastVowel");
            return left + right;
        }
        i--;
    }
    return word;
}



function isVowel(letter) {
    let vowels = ["a", "e", "i", "o", "u"];
    // let vowels = {
    //     "a" : true,
    //     "e" : true,
    //     "i" : true,
    //     "o" : true,
    //     "u" : true,
    // }
    // return vowels[letter]; //this way would work as well
    // console.log("got to isVowel");
    return(vowels.includes(letter));
}

// console.log(isVowel("a"));
// console.log(isVowel("z"));

console.log(hipsterfy("proper"));
//"propr"

console.log(hipsterfy("proper tonic panther"));
//"propr tonc panthr"

console.log(hipsterfy("towel flicker banana"));
//"towl flickr banan"

console.log(hipsterfy("runner anaconda"));
//"runnr anacond"

console.log(hipsterfy("turtle cheeseburger fries"));
//"turtl cheeseburgr fris"
