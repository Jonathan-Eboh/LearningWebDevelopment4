"use strict"

//myForEach
// Write a function myForEach(arr, cb) that accepts an array and a callback. It should pass each element, its corresponding index, and the array itself to the callback. Do not use the built-in Array.prototype.forEach method. The return value is irrelevant.

function myForEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
    let ele = arr[i]; //this is the only thing we dont explicitly have (that is somthing called ele which represents the value at a given index in an array)
    callback(ele, i, arr); //this is where we envoke our callback with the appropriate parameters passed in
    }
}

myForEach([1,2,3,4], function(ele, i, arr) {
  console.log(ele + " is at position " + i + " in array " + "["+arr+"]");
});
// 1 is at position 0 in array [1,2,3]
// 2 is at position 1 in array [1,2,3]
// 3 is at position 2 in array [1,2,3]



//mySelect
// Write a function mySelect(arr, cb) that accepts an array and a callback. It should pass each element, its corresponding index, and the array itself to the callback. It should return a new array of all the elements in the input array arr where the callback cb returns true.


function mySelect(arr, callback) {
    let newArr = [];
    for (var i = 0; i < arr.length; i++) {
        let ele = arr[i];

        if (callback(ele, i, arr)) {
            newArr.push(ele);
        }

    }
    return newArr;
}


console.log(mySelect([1,2,3,4,5,6], function(ele) { //dont need i and arr here because we dont use them in this function
  return (ele % 2 === 0);
}));
// [2, 4, 6]

console.log(mySelect([1,2,3,4,5,6], function(ele, i) {//dont need arr here because we dont use it in the function but we still need to pass in ele because the order and amount of arugment matter not the name
  return (i % 2 === 0);
}));
// [1, 3, 5]

//myReject
// Write a function myReject(arr, cb) that accepts an array and a callback. It should pass each element, its corresponding index, and the array itself to the callback. It should return a new array of all the elements in the input array arr where the callback cb returns false.



function myReject(arr, callback) {
    let newArr = [];
    for (var i = 0; i < arr.length; i++) {
        let ele = arr[i];

        if (!callback(ele, i, arr)) {
            newArr.push(ele);
        }

    }
    return newArr;
}


console.log(myReject([1,2,3,4,5,6], function(ele) { //dont need i and arr here because we dont use them in this function
  return (ele % 2 === 0);
}));
// [1,3,5]

console.log(myReject([1,2,3,4,5,6], function(ele, i) {//dont need arr here because we dont use it in the function but we still need to pass in ele because the order and amount of arugment matter not the name
  return (i % 2 === 0);
}));
// [2,4,6]

//myMap
// Write a function myMap(arr, cb) that accepts an array and a callback. It should pass each element, its corresponding index, and the array itself to the callback. Do not use the built in Array.prototype.map method. It should return an array where each element is the return value of the callback given the element in the corresponding position. See the examples if this is confusing.


function myMap(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        let ele = arr[i];

        arr[i] = callback(ele, i, arr);
    }
    return arr;
}


console.log(myMap([1,2,3], function(ele, i, arr) {
  return ele * 2;
}));
//[2, 4, 6]

console.log(myMap([1,2,3], function(ele, i, arr) {
  return ele + i;
}));
//[1, 3, 5]

console.log(myMap(["A", "B", "C"], function(ele, i, arr) {
  return ele + i;
}));
//["A0", "B1", "C2"]

//Their version of myMap(leaves original array left alone)------------------
function myMap2(arr, callback) {
    let mappedResults = [];
    for (var i = 0; i < arr.length; i++) {
        let ele = arr[i]
        let mappedItem = callback(ele, i, arr);
        mappedResults.push(mappedItem);
    }

    return mappedResults;
}


console.log(myMap2([1,2,3], function(ele, i, arr) {
  return ele * 2;
}));
//[2, 4, 6]

console.log(myMap2([1,2,3], function(ele, i, arr) {
  return ele + i;
}));
//[1, 3, 5]

console.log(myMap2(["A", "B", "C"], function(ele, i, arr) {
  return ele + i;
}));
//["A0", "B1", "C2"]
