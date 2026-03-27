// Using the same logic as task 1
myPromise
    .then(result => {
        console.log("Step 1 - Got result:", result);
        return result.toUpperCase();
    })
    .then(upper => {
        console.log("Step 2 - Uppercased:", upper);
        return "Done: " + upper;
    })
    .then(final => console.log("Step 3 - Final:", final))
    .catch(err => console.log(err));