// 1330 두 수 비교하기
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);

if(a > b) {
  console.log('>')
} else if (a < b) {
  console.log('<')
} else {
  console.log('==')
}


