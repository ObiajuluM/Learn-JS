// Populating array with values
let arr3 = new Array(5); // create an array with a length of 5
for (let i = 0; i < arr3.length; i++) {
  arr3[i] = i * 2; // populate with even numbers
}
console.log(arr3); // Output: [0, 2, 4, 6, 8]
console.log(arr3.length); // Output: 5
console.log(arr3[7]); // Output: undefined
