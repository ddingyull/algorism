// 2292벌집

const x = require('fs').readFileSync('/dev/stdin').toString();
// const x = 58

let num = 1 //벌집 크기
let block = 1 //벌집에서 숫자까지의 블럭개수

while (block < x){
  block += num * 6;
  num++
}

console.log(num);




