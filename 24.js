// Dates

console.log(new Date()); // Current date and time

const specificDate = new Date("2023-01-01");
console.log(specificDate); // Specific date and time

const timestampDate = new Date(1672531199000);
console.log(timestampDate); // Date from timestamp

win95 = new Date(1995, 11, 17); // December 17, 1995
console.log(win95);

// set date components
const date = new Date();
console.log(`default: ${date}`); // Current date
date.setFullYear(2024);
date.setMonth(0); // January
date.setDate(1);

console.log(`modified date: ${date}`); // Updated date
