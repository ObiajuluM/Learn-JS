// Loops

const names = ["Alice", "Bob", "Charlie"];
// while loop
console.log("While Loop:");
let whileIndex = 0;
while (whileIndex < names.length) {
  console.log(names[whileIndex]);
  whileIndex++;
}

// for loop
console.log("\nFor Loop:");
for (let forIndex = 0; forIndex < names.length; forIndex++) {
  console.log(names[forIndex]);
}

// for...of loop
console.log("\nFor...of Loop:");
for (const name of names) {
  console.log(name);
}
// for...in loop
console.log("\nFor...in Loop:");
for (const index in names) {
  console.log(names[index]);
}
// do...while loop
console.log("\nDo...While Loop:");
let doWhileIndex = 0;
do {
  console.log(names[doWhileIndex]);
  doWhileIndex++;
} while (doWhileIndex < names.length);

// Loop Control Statements
console.log("\nLoop Control Statements:");
for (let i = 0; i < names.length; i++) {
  if (names[i] === "Bob") {
    console.log("Found Bob, skipping...");
    continue; // Skip Bob
  }
  console.log(names[i]);
}
