// Objects
var student = {
  name: "Obi",
  age: 24,
  isAvailable: (boolean = true),

  greet: function greetme() {
    console.log("Hello " + this.name);
    console.log("Age: " + this.age);
    console.log(`Type of Availability: ${typeof this.isAvailable}`);
    if (this.isAvailable) {
      console.log(this.name + " is available.");
    } else {
      console.log(this.name + " is not available.");
    }

  },
};


student.greet();
console.log("Student:", student);


// Bracket notation
console.log("Accessing name using bracket notation:", student["name"]);

// Dot notation
console.log("Accessing age using dot notation:", student.age);

// Adding new property
student.grade = "A";
console.log("Added Grade:", student.grade);
// Modifying existing property
student.age = 25;
console.log("Modified Age:", student.age);
// Deleting a property
delete student.isAvailable;
console.log("Deleted isAvailable:", student);
// Checking property existence
console.log("Has 'name' property:", "name" in student);
console.log("Has 'isAvailable' property:", "isAvailable" in student);


// // Iterating over properties
// console.log("Iterating over student properties:");
// for (var key in student) {
//   console.log(key + ": " + student[key]);
// }


// Global This Context
console.log("Global This Context:", this);
function showThis() {
  console.log("Function This Context:", globalThis);
}

showThis();

console.log(this === globalThis);