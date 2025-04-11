// // ১. দ্বিতীয় সর্বোচ্চ সংখ্যা বের করা
// function secondLargest(arr) {
//   let uniqueArr = [...new Set(arr)];
//   uniqueArr.sort((a, b) => b - a);
//   return uniqueArr[1];
// }

// // ২. ডুপ্লিকেট সরিয়ে নতুন অ্যারে
// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// // ৩. Nested অবজেক্ট এবং নির্দিষ্ট প্রপার্টি প্রিন্ট
// const nestedObject = {
//   name: "John",
//   address: {
//     city: "Dhaka",
//     country: "Bangladesh",
//   },
// };
// console.log(nestedObject.address.city);

// // ৪. অবজেক্টের keys ও values আলাদা করা
// function separateKeysAndValues(obj) {
//   return [Object.keys(obj), Object.values(obj)];
// }

// // ৫. রিকার্সিভ ফাংশনে ফ্যাক্টরিয়াল
// function factorial(n) {
//   if (n === 0) return 1;
//   return n * factorial(n - 1);
// }

// // ৬. কারি ফাংশন (Currying)
// const curriedSum = (a) => (b) => (c) => a + b + c;

// // ৭. FizzBuzz প্রোগ্রাম
// function fizzBuzz() {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
//     else if (i % 3 === 0) console.log("Fizz");
//     else if (i % 5 === 0) console.log("Buzz");
//     else console.log(i);
//   }
// }

// // ৮. for loop দিয়ে অবজেক্টের key-value প্রিন্ট
// function printObject(obj) {
//   for (let key in obj) {
//     console.log(`${key}: ${obj[key]}`);
//   }
// }

// // ৯. অ্যারে থেকে সংখ্যাগুলো বের করে যোগফল
// function sumOfNumbers(arr) {
//   return arr
//     .filter((item) => typeof item === "number")
//     .reduce((sum, num) => sum + num, 0);
// }

// // ১০. প্যালিনড্রোম চেক
// function isPalindrome(str) {
//   const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   return cleaned === cleaned.split("").reverse().join("");
// }

// function add(a, b = 0) {
//   const sum = a + b;
//   console.log(a, b, sum);
//   return sum;
// }
// add(5, 44);

// const add = (a, b = 5) => {
//   console.log(a + b);
// };
// add(5, 8);

// const student = {
//   name: "alamin",
//   age: 20,
//   addressa: "badda",
// };
// console.log(
//   `Name:${student.name} Age:${student.age} Adress:${student.addressa}`
// );

// const numbers = [12, 25, 58, 20];

// const nums = numbers.map((number) => number + 2);
// console.log(nums);
// const numbers = [12, 25, 58, 20, 58];

// const nums = numbers.find((number) => number == 25);
// console.log(nums);

// let kacciPrice = 250;
// let tehariPrice = 150;
// let myTk = 250;
// if (myTk >= kacciPrice) {
//   console.log("kacci khabo");
// } else if (myTk >= tehariPrice && myTk < kacciPrice) {
//   console.log("tehari khabo");
// } else {
//   console.log("sada vat khabo");
// }

// let age = 17;
// const vote =
//   age >= 18 ? "vote dite parbe" : "vote dite parbe na, age voter hote hobe";
// console.log(vote);

const students = ["a", "b", "c"];
const newStudent = [...students, "d"];
console.log(students);
console.log(newStudent);
