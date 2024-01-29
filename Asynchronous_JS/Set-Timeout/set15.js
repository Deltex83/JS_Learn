// Print the Output, with appropriate time gaps (if any)
// Note: If there is a timer but it prints without any delay, do mention that too: write 'immediate/i'
// For example: g1, (1 sec), @r:global, @r:main (i), . . .

async function main() {
  subFunc("main").then(console.log);
  console.log(`m1`);
  await subFunc("main2", 1000).then(console.log);
  console.log(`m2`);
}

// Driver Code;
async function driver() {
  console.log("g1");
  await main();
  console.log("g2");
  await subFunc("global", 0).then(console.log);
  syncSleep(2000);
  console.log("g3");
}
// Driver Run;
driver();

// functions:
function subFunc(arg, ms = 2000) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`@r: ${arg}`);
    }, ms);
  });
}

function syncSleep(ms) {
  let now = Date.now();
  while (Date.now() - now <= ms) {}
}
