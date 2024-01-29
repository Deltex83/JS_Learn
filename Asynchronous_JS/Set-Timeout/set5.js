// Print the Output, with appropriate time gaps (if any)
// Note: If there is a timer but it prints without any delay, do mention that too: write 'immediate/i'
// For example: g1, (1 sec), @r:global, @r:main (i), . . .

async function main() {
  await subFunc("main").then(console.log);
  console.log(`m1`);
}

// Driver Code;
async function driver() {
  console.log("g1");
  main();
  console.log("g2");
  await subFunc("global", 3000).then(console.log);
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
