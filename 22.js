// Errors

try {
  throw Error("This is a custom error message.");
} catch (error) {
  console.log(error.message);
  console.log(error);
} finally {
  console.log("Error handling complete.");
}
