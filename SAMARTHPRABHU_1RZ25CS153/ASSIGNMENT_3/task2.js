try {
  JSON.parse("not a number");
} 
catch (err) {
  console.log("Invalid JSON!");
} 
finally {
  console.log("Parsing attempt done.");
}