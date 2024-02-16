const fs = require("fs");
const crypto = require("crypto");

// The Event Loop in Practice
const start = Date.now();
// Sets the threadpool size
process.env.UV_THREADPOOL_SIZE = 4;

// Second
setTimeout(() => {
  console.log("Timer 1 finished");
}, 0);
// Third
setImmediate(() => console.log("Immediate 1 finished"));

// Last
fs.readFile("test-file.txt", () => {
  console.log("I/O finished");

  setTimeout(() => {
    console.log("Timer 2 finished");
  }, 0);
  setTimeout(() => {
    console.log("Timer 3 finished");
  }, 3000);
  setImmediate(() => console.log("Immediate  2 finished"));

  process.nextTick(() => console.log("Process.nexttick"));

  crypto.pbkdf2Sync("password", "alt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");
  crypto.pbkdf2("password", "alt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
  crypto.pbkdf2("password", "alt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
  crypto.pbkdf2("password", "alt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
  crypto.pbkdf2("password", "alt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
});

// Shows first
console.log("Hello from the top-level code");
