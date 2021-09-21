
let sentence = "hello there from lighthouse labs";
let delay = 100;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 100;
}

setTimeout(() => {
  console.log("");
}, delay);
