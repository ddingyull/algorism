//10757 큰수 A+B
const input = require('fs').readFileSync('/dev/stdin').split(' ').toString();

const A = BigInt(input[0]);
const B = BigInt(input[1]);

let result = A + B;
console.log(result.toString());



