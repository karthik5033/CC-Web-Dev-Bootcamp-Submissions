
try {
    var parsed = JSON.parse("not a number");
    console.log(parsed);
} catch (error) {
    console.log("Invalid JSON!");
} finally {
    console.log("Parsing attempt done.");
}