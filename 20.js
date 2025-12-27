// Converting strings to numbers
const numString = "123.45";
const num = parseFloat(numString);
console.log(`Converted number: ${num}`);
console.log(`Type of converted number: ${typeof num}`);

//parse int
const intString = "678";
const intNum = parseInt(intString, 10);
console.log(`Converted integer: ${intNum}`);
console.log(`Type of converted integer: ${typeof intNum}`);

// Handling invalid conversions
tryParseInt = parseInt("12abc34", 10);
console.log(`Parsed integer from '12abc34': ${tryParseInt}`);

// Rounding numbers
const originalNum = 7.89;
console.log(`Original number: ${originalNum}`);
console.log(`Rounded (nearest integer): ${Math.round(originalNum)}`);
console.log(`Rounded down (floor): ${Math.floor(originalNum)}`);
console.log(`Rounded up (ceil): ${Math.ceil(originalNum)}`);
console.log(`Fixed to 1 decimal place: ${originalNum.toFixed(1)}`);
