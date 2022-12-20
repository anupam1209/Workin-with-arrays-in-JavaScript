"use strict";

//Array Simple Methods
console.log("----SLICE METHOD----");
//SLICE Method
let arr = [1, 2, 3, 4, 5, 6];

console.log(arr.slice(2));
console.log(arr.slice(1, 4));

//NOTE: slice methods doesn't mutates the original array

console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log(arr.slice()); //this will create copy of the array

console.log("----SPLICE METHOD----");
//SPLICE Method
let arrTwo = ["a", "b", "c", "d", "e", "f"];

console.log(arrTwo.splice(2));
console.log(arrTwo);
console.log(arrTwo.splice(-1));

//NOTE: splice method actually mutates the original array

console.log("----REVERSE METHOD----");
//REVERSE method

let anotherArray = [34, 34.523, 235, 231, 53, 76];

console.log(anotherArray.reverse());

console.log("----CONCAT METHOD----");
//CONCAT METHOD

let anotherArraySecond = ["anupam", "mayank", "gaurav"];
console.log(anotherArray.concat(anotherArraySecond));

console.log("----JOIN METHOD----");

console.log(anotherArraySecond.join(" 💓 "));

console.log("----AT METHOD----");

const arrayForAt = ["this", true, 34, "🍉"];
console.log(arrayForAt.at(2));

//suppose we don't know the length of the array, then we can use get last element of array as
console.log(arrayForAt.at(-1));
