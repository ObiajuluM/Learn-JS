// boolean logic with if statements

const statuS = 200;

if (statuS === 200) {
  console.log("OK");
} else if (statuS === 400) {
  console.log("Not Found");
} else console.log("Not OK");

// This can also be written as:
// if (statuS === 200) console.log("OK");
// else if (statuS === 400) console.log("Not Found");
// else console.log("Not OK");

//  tenary operator
statuS === 200
  ? console.log("OK")
  : statuS === 400
  ? console.log("Not Found")
  : console.log("Not OK");
