/**********************************************************
Write a function leastCommonMultiple(num1, num2) that
returns the smallest number which is a multiple of both
inputs.

Examples:
> leastCommonMultiple(2, 3);
6

> leastCommonMultiple(6, 10);
30

> leastCommonMultiple(24, 26);
312
**********************************************************/

"use strict"

function leastCommonMultiple(num1, num2) {
  // your code here...
  //walk from one up to each num pushing all multiples into an array
  //then get the min of

  let multiples1 = [];
  let multiples2 = [];
  for (let i = 1; i < num1; i++) {
      if (num1 % i === 0) {
          multiples1.push(i);
      }
  }
  for (let i = 1; i < num2; i++) {
      if (num2 % i === 0) {
          multiples2.push(i);
      }
  }

  let minArr = [];
  for (var i = 0; i < multiples1.length; i++) {
      for (var j = 0; j < multiples2.length; j++) {
          if (multiples1[i] === multiples2[j]) {
              minArr.push(i);
          }
      }
  }

  let min = minArr[0];

  for (var i = 0; i < minArr.length; i++) {
      if (minArr[i] < min) {
          min = minArr[i];
      }
  }
  return min;
}


// Examples:
// console.log(leastCommonMultiple(2, 3));
// //6
//
// console.log(leastCommonMultiple(6, 10));
// //30
//
// console.log(leastCommonMultiple(24, 26));
// //312

function leastCommonMultiple2(num1,num2) {
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
console.log(leastCommonMultiple2(2, 3));
console.log(leastCommonMultiple2(3, 2));
//6

console.log(leastCommonMultiple2(6, 10));
//30

console.log(leastCommonMultiple2(24, 26));
//312
