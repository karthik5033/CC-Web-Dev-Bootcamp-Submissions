try{
    JSON.parse("Not a number");
}
catch{
    console.log("Invalid JSON!!!!");
}
finally{
    console.log("Parsing Process is completed");
}