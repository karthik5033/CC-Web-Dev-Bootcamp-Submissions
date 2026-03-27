function checkage(age) 
{if (age<=0) 
    {throw new Error("Age must be a positive number!");} 
    else if (age<18) 
        {throw new Error("Too young! Must be 18 or above");} 
    else {return "Access granted!";}}
try 
{console.log(checkage(-1));} 
catch (error) 
{console.error(error.message);}