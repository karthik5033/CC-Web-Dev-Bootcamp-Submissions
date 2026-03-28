let count = 5;
const interval = setInterval(() => {
  console.log(count);
  if (count === 0) {
    console.log("Time's up!");
    clearInterval(interval);
  }
  count--;
}, 1000);