//백준 제출 할 때 주석 제거
const readFileSyncAddress = '/dev/stdin';

//VSC 테스트 할 때 주석 제거
// const readFileSyncAddress = 'input.txt';


// 10870 피보나치 수5
//방법1
const n = require('fs').readFileSync('/dev/stdin').toString();
let input = Number(n);

let answer = [0,1];
let result;

//for문을 사용한 방법1
for(let i = 1; i < input; i++) {
  if(input === 0) {
    console.log(0);
  }
  if(input > 0) {
    result = answer[i] + answer[i-1]; 
    answer.push(result);
  }
}
console.log(answer[-1])

//방법2
const n = require('fs').readFileSync('/dev/stdin').toString() * 1;
const DP = [0, 1];

for (let i = 1; i < n; i++) {
    DP[i+1] = BigInt(DP[i]) + BigInt(DP[i-1]);
}

console.log(DP[n].toString());

//return과 console의 차이점은 뭐지? 
//push를 이렇게 생략할 수 있는건가?
//꼭 bigint를 써야하는가?