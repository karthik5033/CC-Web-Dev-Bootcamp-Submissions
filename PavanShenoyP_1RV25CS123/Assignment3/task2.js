try {
  JSON.parse("not a number");
} catch (error) {
  console.error("Invalid JSON!");
} finally {
  console.log("Parsing attempt done.");
}
