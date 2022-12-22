//THIS SCRIPT IS ONLY FOR LEARNING CONCEPTS OF ARRAYS IN JAVASCRIPT, NOT USED FOR "BANKIST" PROJECT
'use strict';

//Array Simple Methods
console.log('----SLICE METHOD----');
//SLICE Method
let arr = [1, 2, 3, 4, 5, 6];

console.log(arr.slice(2));
console.log(arr.slice(1, 4));

//NOTE: slice methods doesn't mutates the original array

console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log(arr.slice()); //this will create copy of the array

console.log('----SPLICE METHOD----');
//SPLICE Method
let arrTwo = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log(arrTwo.splice(2));
console.log(arrTwo);
console.log(arrTwo.splice(-1));

//NOTE: splice method actually mutates the original array

console.log('----REVERSE METHOD----');
//REVERSE method

let anotherArray = [34, 34.523, 235, 231, 53, 76];

console.log(anotherArray.reverse());

console.log('----CONCAT METHOD----');
//CONCAT METHOD

let anotherArraySecond = ['anupam', 'mayank', 'gaurav'];
console.log(anotherArray.concat(anotherArraySecond));

console.log('----JOIN METHOD----');

console.log(anotherArraySecond.join(' 💓 '));

console.log('----AT METHOD----');

const arrayForAt = ['this', true, 34, '🍉'];
console.log(arrayForAt.at(2));

//suppose we don't know the length of the array, then we can use get last element of array as
console.log(arrayForAt.at(-1));

//forEach loop in JS
console.log('----forEach loop----');
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//it takes a callback function and it is called everytime for each element in the array
movements.forEach(function (element) {
  console.log(element);
});

//callback functions parameter --> current element, current index, array itself
movements.forEach(function (element, index, array) {
  //   console.log(`array: ${array}`);
  console.log(`element: ${element}, index: ${index}`);
});

console.log('----forEach loop with MAPS & SETS----');
const map = new Map([
  ['anupam', 'atul'],
  ['jai', 'veeru'],
  ['sunny', 'bunny'],
]);

map.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});

const set = new Set([
  'apple',
  'orange',
  'pineapple',
  'orange',
  'apple',
  'watermelon',
]);

set.forEach(function (value, _, set) {
  console.log(`${value}`); //set has no index and keys, so we can use _(throwable variable) --> throwable variable is unecessary variable
});
