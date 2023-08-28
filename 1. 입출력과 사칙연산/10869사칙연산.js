const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split(" ");

const a = parseInt(inputData[0]);
const b = parseInt(inputData[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);

// 오답
// console.log(`${A + B}\n${A - B}\n${A * B}\n${A / B}\n${A * B - A / B}`);

// 다른 답
// const solution = (input) => {
//   const [a, b] = (input + '').split(' ').map((s) => +s);
//   console.log(a + b);
//   console.log(a - b);
//   console.log(a * b);
//   console.log(parseInt(a / b));
//   console.log(a % b);
// };
// process.stdin.on('data', solution);
