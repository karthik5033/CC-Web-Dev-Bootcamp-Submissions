const input='{"number": 42}';
try{
    const a= JSON.parse(input);
    console.log("Parsed:" , a);
    const b=JSON.parse("not a number");
    throw new Error("Invalid JSON!");    
    console.log("Parsed:" + b);
} catch (error) {
    console.error(error.message);
}
finally{
    console.log("Parsing attempt done.");
}