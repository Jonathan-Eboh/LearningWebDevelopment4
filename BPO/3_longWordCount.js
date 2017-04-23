/**********************************************************
Write a function longWordCount(string, n) that takes in a
string and returns the number of words longer than n
characters.

Examples:
> longWordCount("", 3);
0

> longWordCount("short words only", 6);
0

> longWordCount("one reallylong word", 9);
1

> longWordCount("two reallylong words inthisstring", 9);
2

> longWordCount("seventy schfifty five", 7);
1
**********************************************************/

"use strict"
function longWordCount(string, n) {
  // your code here...
  let stringArr = string.split(" ");
  // console.log(stringArr);
  let counter = 0;
  for (var i = 0; i < stringArr.length; i++) {
      if (stringArr[i].length > n) {
          counter += 1
      }
    }
    return counter;
}


Examples:
console.log(longWordCount("", 3));
//0

console.log(longWordCount("short words only", 6));
//0

console.log(longWordCount("one reallylong word", 9));
//1

console.log(longWordCount("two reallylong words inthisstring", 9));
//2

console.log(longWordCount("seventy schfifty five", 7));
//1
