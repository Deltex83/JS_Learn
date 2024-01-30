// Print the Output, with appropriate time gaps (if any)
// Note: If there is a timer but it prints without any delay, do mention that too: write 'immediate/i'
// For example: g1, (1 sec), @r:global, @r:main (i), . . .

async function main() {
  subFunc("main", 0).then(console.log);
  console.log(`m1`);
  await subFunc("main2", 1000).then(console.log);
  console.log(`m2`);
}

async function driver() {
  console.log("g1");
  main();
  console.log("g2");
  await subFunc("global", 0).then(console.log);
  syncSleep(2000);
  console.log("g3");
}

// Driver Code;
console.log(`o1`);
/* Rather than invoking the function: "driver" below,
 * we can use an IIFE for it too, and the final output would remain exactly the same;
 */
driver();
console.log(`o2`);
subFunc("OGlobal", 0).then(console.log);
console.log(`o3`);

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
