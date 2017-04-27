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
}

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
function longestLetterStreak(str, searchLetters){
  // your code here...
}

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
function inPigLatin(sentence){
  // your code here...
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  inPigLatin : inPigLatin,
  countAdjacentSums : countAdjacentSums,
  longestLetterStreak : longestLetterStreak
};
