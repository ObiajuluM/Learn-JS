// Data types in JavaScript

// number(float, ), string, boolean, date, function, object, array

console.log(typeof 42); // "number"
console.log(typeof "Hello");
console.log(typeof true); // "boolean"
console.log(typeof new Date()); // "object"
console.log(typeof function () {}); // "function"
console.log(typeof { name: "Alice" }); // "object"
console.log(typeof [1, 2, 3]); // "object" (arrays are objects in JavaScript)

// Type coercion examples
let x = 0 == ""; // true (loose equality with type coercion)
let y = 0 === ""; // false (strict equality without type coercion)

const person = {
  name: "Bob",
  age: 25,
};

function sayHello(person) {
  console.log(
    `Hello, my name is ${person.name} and I am ${person.age} years old.`
  );
}

sayHello(person); // Output: Hello, my name is Bob and I am 25 years old.

console.log([1, 2, 3] instanceof Array); // true
