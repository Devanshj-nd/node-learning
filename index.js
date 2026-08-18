// Adding comment
// import { cwd, version, platform, argv } from 'node:process';
// Test New Branch commit
const message = 'Hello Node.js';
console.log(message);
console.log("argv", process.argv);
console.log("cwd", process.cwd());
console.log("version", process.version);
console.log("platform", process.platform);
console.log("exit", process.exitCode = 1 );
const name = process.argv[2];
const age  = process.argv[3];
if(!name || !age) {
    console.log("Please provide name and age");
    process.exit();
}
console.log(`Hello ${name}, you are ${age} years old`);
// Ending comments

console.log(Number("30"));
console.log(Number("30abc"));
console.log(parseInt("30abc"));
console.log(Number(""));


