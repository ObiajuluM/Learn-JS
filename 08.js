// Comments

/* This is a
multi-line comment */

let value = "Reverse Me";
let reversed = "";

value.split("").forEach((char) => {
  reversed = char + reversed;
});

console.log(reversed); // Output: "eM esreveR"
console.log