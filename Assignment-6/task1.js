async function runOperation() {
let myPromise = new Promise((resolve,reject)=>{
    let success = true;
    setTimeout(()=>{
    if(success)
        resolve("Operation Successful!")
    
    else
        reject("Operation Failed!")
    })
},2000)

  try {
    let value = await myPromise;
    console.log(value);
  } catch (error) {
    console.log(error);
  }
}

runOperation();