// Declaring variables

// var, let, const
// var is function-scoped, is available before declaration (hoisting), mutable
// let is block-scoped, not available before declaration, mutable
// const is block-scoped, not available before declaration, immutable

console.log(hello); // undefined
var hello = "Hello, World!";

let count = 10;
const pi = 3.14;

hello = "Hi there!";
console.log(hello); // Output: "Hi there!"

console.log(count); // Output: 10
console.log(pi); // Output: 3.14


