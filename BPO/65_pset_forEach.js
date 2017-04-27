/*************************************************************
Write a function logEach(ary) that prints every element
of the array and its index to the console.

Use Array#forEach.

Examples:
> logEach(["Anthony", "John", "Carson"]);
0: Anthony
1: John
2: Carson
*************************************************************/

// .forEach(function (el, idx, array) {
//     //code to run for each element in array
// })


function logEach(array) {
  // your code here...
  cb = function(el, idx, array) { //the name doesnt matter the order does
      console.log(idx +":" +" "+el);
  }
  array.forEach(cb);
}

Examples:
console.log(logEach(["Anthony", "John", "Carson"]));
// 0: Anthony
// 1: John
// 2: Carson


/*************************************************************
Write a function maxValue(ary) that returns the largest
value in the ary. ary is an array of numbers.

Use Array#forEach.

Examples:
> maxValue([12, 6, 43, 2])
43

> maxValue([])
null

> maxValue([-4, -10, 0.43])
0.43
*************************************************************/

function maxValue(array) {
  // your code here...
  let max = array[0];
  cb = function(el, idx, array) { //the name doesnt matter the order does
          if (el > max) {
              max = el;
          }

  }
  array.forEach(cb);
  return max;
}

Examples:
console.log(maxValue([12, 6, 43, 2]));
//43

console.log(maxValue([]));
//null

console.log(maxValue([-4, -10, 0.43]));
//0.43


/**********************************************************
Write a function longWordCount(string, n) that takes in a
string and returns the number of words longer than n
characters.

Use Array#forEach.

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

function longWordCount(string, n) {
    // your code here...
    let stringArr = string.split(" ");
    let counter = 0;
    cb = function(word, idx, array) { //the name doesnt matter the order does
            if (word.length > n) {
                counter +=1
            }

    }
    stringArr.forEach(cb);
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




/***************************************************************************
Write a function arraySumN(ary, n) which takes as ary a 2-dimensional array
and as n a number. ary is an array of arrays of numbers. The function returns
the indices of the inner arrays whose elements sum to n.

Use Array#forEach.

Example 1:
let ary1 = [ [0, 1], [2, 2, 0], [3, -2] ];
let results1 = arraySumN(ary1, 1);
results1; // => [0, 2]

Example 2:
let ary2 = [ [3, 2, 1], [100], [0, 1, 2, 3, 100], [6] ];
arraySumN(ary2, 6); // => [0, 3]
***************************************************************************/

function arraySumN(ary, n) {
  // your code here...
  let indices = [];

  ary.forEach(function (innerAry, idx) {
      let innerArrSum = 0;

      innerAry.forEach(function(num) {
          innerArrSum += num;
      });

      if (innerArrSum === n) {
          indices.push(idx);
      }
  });


  return indices;

}



var ary1 = [ [0, 1], [2, 2, 0], [3, -2] ];
console.log(arraySumN(ary1, 1));


var ary2 = [ [3, 2, 1], [100], [0, 1, 2, 3, 100], [6] ];
console.log(arraySumN(ary2, 6));
