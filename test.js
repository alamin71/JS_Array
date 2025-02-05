// Problem 1: Array Element Add
let PersonNames = ["Karim", "Jamal", "Rafiq"];
PersonNames.push("Rahim");
console.log("Updated Array add Rahim:", PersonNames);

// Problem 2: Array Length
let numberrs = [10, 20, 30, 40, 50];
console.log("Array Length is:", numberrs.length);

// Problem 3: Array Slice
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let slicedArray = numbers.slice(0, 5);
console.log("Sliced Array:", slicedArray);

// Problem 4: Array IndexOf
let names = ["Kamal", "jamal", "Babul", "John", "Kabul"];
let index = names.indexOf("John");
console.log("Index of 'John':", index);

// Problem 5: Grade Evaluation
let score = 75;

if (score > 90) {
  console.log("A+");
} else if (score > 75 && score < 90) {
  console.log("A");
} else if (score > 50 && score < 75) {
  console.log("B");
} else {
  console.log("Fail");
}

//use Ternary
let scores = 85;
console.log(
  scores > 90
    ? "A+"
    : scores > 75 && scores < 90
    ? "A"
    : scores > 50 && scores < 75
    ? "B"
    : scores < 50
    ? "Fail"
    : "Invalid Score"
);

// Problem 6: Marriage Eligibility

let age = 25;
let hasJob = true;
let salary = 60000;
let hasGovtJob = false;
let hasHouseInDhaka = false;

if (age >= 23) {
  if ((hasJob && salary > 50000) || hasGovtJob || hasHouseInDhaka) {
    console.log("You are eligible for marriage");
  } else {
    console.log("You are not eligible for marriage");
  }
} else {
  console.log("You are not eligible for marriage due to age");
}

// let age = 25;
// let hasJob = true;
// let salary = 60000;
// let hasGovtJob = false;
// let hasHouseInDhaka = false;
// //use Ternary
// console.log(
//   age >= 23 && ((hasJob && salary > 50000) || hasGovtJob || hasHouseInDhaka)
//     ? "You are eligible for marriage"
//     : "You are not eligible for marriage"
// );
