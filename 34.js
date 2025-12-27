// Array methods
let fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Date"); // Add an element to the end
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Date"]

let lastFruit = fruits.pop(); // Remove the last element
console.log(lastFruit); // Output: "Date"
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

let firstFruit = fruits.shift(); // Remove the first element
console.log(firstFruit); // Output: "Apple"
console.log(fruits);

fruits.unshift("Apricot"); // Add an element to the beginning
console.log(fruits); // Output: ["Apricot", "Banana", "Cherry"]

// concatenate arrays
let moreFruits = ["Elderberry", "Fig"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ["Apricot", "Banana", "Cherry", "Elderberry", "Fig"]
