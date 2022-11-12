//백준 제출 할 때 주석 제거
const readFileSyncAddress = '/dev/stdin';

//VSC 테스트 할 때 주석 제거
// const readFileSyncAddress = 'input.txt';


// 10872 팩토리얼
const n = require('fs').readFileSync('/dev/stdin').toString();
let result = Number(n);

let answer = 1;

for(let i = 1; i <= result; i++){
  answer *= i;
}

console.log(answer);

//주의해야할 부분, 피드백
//1. 곱셈이기 때문에 0은 같이 곱하면 안되니 let선언할 때 조심하자
//2. 곱셈으로 자주 안해봐서 순간 헷갈렸는데 answer *=으로 작성하는 습관을 갖자