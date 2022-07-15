// [11720]숫자의 합
// 방법 1.
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split('\n'); //.split('\n'):줄바꿈

// 정수 n개를 입력받는 코드
let num = Number(input[0]);
// 띄어쓰기 없이 정수를 연속으로 입력받는 코드
let num2 = input[1].split("");

let sum = 0;

for(let i = 0; i < num; i++) {
  sum += Number(num2[i]);
}

console.log(sum);


// // 방법 2.
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// let num = input[1].split('');

// let sum = num.reduce((acc, v) => {
//     return acc += v * 1;
// }, 0);

// console.log(sum);