let count = 0;

const id = setInterval(() => {
  count++;
  console.log("Tick...");

  if (count === 5) {
    clearInterval(id);
    console.log("Stopped!");
  }
}, 1000);