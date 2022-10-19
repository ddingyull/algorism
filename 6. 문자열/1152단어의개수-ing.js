//백준 제출 할 때 주석 제거
const readFileSyncAddress = '/dev/stdin';

//VSC 테스트 할 때 주석 제거
// const readFileSyncAddress = 'input.txt';


// 1152 문자열 반복
const input = require('fs').readFileSync('/dev/stdin').toString();
 
const spl = input.trim().split('');

// 질문하기
if (input[0] === "") {
  console.log(0);
} else{
  console.log(input.length);
}

// ? 기준으로 맞다면 0, 아니라면 input.length인건데 왜 그냥 숫자 0인건지
// console.log(input[0] === "" ? 0 : input.length);
