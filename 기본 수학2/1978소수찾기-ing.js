//백준 제출 할 때 주석 제거
const readFileSyncAddress = '/dev/stdin';

//VSC 테스트 할 때 주석 제거
// const readFileSyncAddress = 'input.txt';


// 1978 소수 찾기
// 소수 : 1과 자기 자신만으로 나누어 떨어지는 1보다 큰 양의 정수를 의미함 
//왜 안되는지 찾고싶은 코드 
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/).slice(1).map(Number).filter(x=>{
  if(x===0 || x===1)return;
  for(let i=2; i*i<=x; i++){
      if(x % i === 0) return;
  }
}).length

console.log(input);

//정답
console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/).slice(1).map(Number).filter(x=>{
  if(x===1) return;
  for(let i=2; i*i<=x; i++){
      if(x % i === 0) return;
  }
}).length)
