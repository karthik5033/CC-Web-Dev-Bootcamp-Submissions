try {
  const result = JSON.parse("not a number");
  console.log(result);
} catch (e) {
  console.log("Invalid JSON!");
} finally {
  console.log("Parsing attempt done.");
}