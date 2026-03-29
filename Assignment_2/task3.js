let i = 5;

const a = setInterval(() => {
  console.log(i);
  i=i-1;
  if (i === -1) {
    clearInterval(a);
    console.log("Stopped!");
  }
}, 1000);