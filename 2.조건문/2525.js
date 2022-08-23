// 2525 오븐 시계
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let a = parseInt(input[0].split(' ')[0]);
let b = parseInt(input[0].split(' ')[1]);
let c = parseInt(input[1]);

let hour = 0;
let min = 0;

hour = Math.floor((a * 60 + b + c ) / 60);
min = (a * 60 + b + c) % 60;
if(hour >= 24) {
  hour -= 24;
}
console.log(`${hour} ${min}`);