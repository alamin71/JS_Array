// function oddOrEvenCheck(a, b) {
//   const resultA = a % 2 === 0 ? "even" : "odd";
//   const resultB = b % 2 === 0 ? "even" : "odd";

//   return `Number ${a} is ${resultA}, Number ${b} is ${resultB}`;
// }

// console.log(oddOrEvenCheck(1, 50)); // Output: "Number 1 is odd, Number 50 is even"
// console.log(oddOrEvenCheck(2, 3)); // Output: "Number 2 is even, Number 3 is odd"

function printOnetoTen() {
  let result = [];
  for (let i = 1; i <= 10; i++) {
    result.push(i);
  }
  return result;
}
console.log(printOnetoTen());
