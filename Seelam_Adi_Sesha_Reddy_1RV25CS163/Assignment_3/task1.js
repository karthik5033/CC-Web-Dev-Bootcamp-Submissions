const divide = (a,b) => 
    {if (b==0) 
        {throw new Error("Cannot divide by zero!")}
    console.log(a/b)};
try{divide(10,0)}
catch(e){console.log("Error: " + e.message)}
