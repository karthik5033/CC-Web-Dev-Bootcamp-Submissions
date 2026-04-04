try{
    JSON.parse("not a number!");
}
catch(error){
    console.log("Invalid JSON! - task2.js:5");
}
finally{
    console.log("Parsing attempt done. - task2.js:8")
}