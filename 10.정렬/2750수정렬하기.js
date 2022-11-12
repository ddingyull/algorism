// 2750 수 정렬하기

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

input.shift() //첫번째는 개수가 주어지기 때문에 첫번째수를 날려서 배열로 받기 위해 shift를 사용
input.sort((a,b) => a-b); //문자열이면 sort()이지만 숫자이기 때문에 절대값이 되도록 빼주기 

for(let i = 0; i<input.length; i++){
  console.log(input[i]);
}

