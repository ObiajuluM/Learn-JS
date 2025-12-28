// Javascript object notation (JSON)

var student = {
  name: "Obi",
  age: 24,
};
console.log("Student Name: " + student.name);
console.log("Student Age: " + student.age);
console.log("Student Object: " + student);

var studentJSON = JSON.stringify(student);
console.log("JSON String: " + studentJSON);

console.log(typeof studentJSON);
console.log(typeof student);

// parsing JSON
var parsedStudent = JSON.parse(studentJSON);
console.log("Parsed Student Name: " + parsedStudent.name);
console.log("Parsed Student Age: " + parsedStudent.age);
console.log("Parsed Student Object: " + parsedStudent);
