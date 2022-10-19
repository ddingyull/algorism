// 1712손익분기점

// const A = 1000
// const B = 70
// const C = 170

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const A = input[0]
const B = input[1]
const C = input[2]

let X = A/(C-B)

let X2 = Math.floor(X) + 1;

if (C-B <= 0){
  console.log(-1);
} else{
  console.log(X2);
}



