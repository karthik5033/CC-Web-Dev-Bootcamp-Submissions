
function checkage(age){
    if(age < 0){
        console.log("Error:Age must be a positive number!")
        }
    else if( age < 18){
        console.log("Error:Too young!Must be 18 or above")
    }
    else{
        console.log("Access Granted!")
    }
}

checkage(25);
checkage(15);
checkage(-1);