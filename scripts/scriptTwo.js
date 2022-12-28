//THIS SCRIPT IS ONLY FOR LEARNING CONCEPTS OF ARRAYS IN JAVASCRIPT, NOT USED FOR "BANKIST" PROJECT
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

//forEach loop in JS
console.log("----forEach loop----");
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

console.log("----forEach loop with MAPS & SETS----");
const map = new Map([
  ["anupam", "atul"],
  ["jai", "veeru"],
  ["sunny", "bunny"],
]);

map.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});

const set = new Set([
  "apple",
  "orange",
  "pineapple",
  "orange",
  "apple",
  "watermelon",
]);

set.forEach(function (value, _, set) {
  console.log(`${value}`); //set has no index and keys, so we can use _(throwable variable) --> throwable variable is unecessary variable
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCopy = [...dogsJulia];
  dogsJuliaCopy.shift();
  dogsJuliaCopy.splice(-2);
  const dogsKateCopy = [...dogsKate];

  const bothDogs = [...dogsJuliaCopy, ...dogsKateCopy];
  console.log(bothDogs);

  bothDogs.forEach(function (age, number) {
    const typeOfDog = age >= 3 ? "adult" : "puppy";
    const aORan = typeOfDog === "adult" ? "an" : "a";
    console.log(
      `Dog number ${
        number + 1
      } is ${aORan} ${typeOfDog}, and is ${age} years old`
    );
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

//DATA TRANSFORMATION
console.log("------DATA Transformation-----");
const randomArray = [1, 2, 3, 5, 6];
const mapRandomArray = randomArray.map((x) => x * 2);
console.log(mapRandomArray);

const filterRandomArray = randomArray.filter((x) => x > 2);
console.log(filterRandomArray);

const initialValue = 0;
const reduceRandomArray = randomArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(reduceRandomArray);
