// const result = 69;
// if (result >= 80) {
//   console.log("A+");
// } else if (result >= 70) {
//   console.log("A");
// } else if (result >= 60) {
//   console.log("A-");
// } else if (result >= 50) {
//   console.log("B");
// } else if (result >= 40) {
//   console.log("C");
// } else if (result >= 33) {
//   console.log("D");
// } else {
//   console.log("fail");
// }

// const marks = 60;
// let result =
//   marks >= 80 ? "A+" : marks >= 70 ? "A" : marks >= 60 ? "A-" : "fail";
// console.log(result);

const Fruits = [
  "tomato",
  "cucumber",
  "carrot",
  "apple",
  ["egg", "fish", "Meat"],
];

const veg = Fruits[4];
// console.log(veg[1]);

const newArray = [...Fruits];
console.log(newArray === Fruits);
