let count = 0;
const interval = setInterval(() => {
  count++;
  console.log("Tick...");
  if (count === 3) {
    clearInterval(interval);
    console.log("Stopped!");
  }
}, 1000);