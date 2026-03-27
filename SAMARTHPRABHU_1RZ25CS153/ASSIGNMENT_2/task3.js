let num = 5;

const id = setInterval(() => {
  console.log(num);
  
  if (num === 0) {
    console.log("Time's up!");
    clearInterval(id);
  }

  num--;
}, 1000);