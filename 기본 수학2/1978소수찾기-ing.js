//백준 제출 할 때 주석 제거
const readFileSyncAddress = '/dev/stdin';

//VSC 테스트 할 때 주석 제거
// const readFileSyncAddress = 'input.txt';


// 1978 소수 찾기
// 소수 : 1과 자기 자신만으로 나누어 떨어지는 1보다 큰 양의 정수를 의미함 
const input = require('fs').readFileSync('/dev/stdin').split("\n");
const testcase = pareInt(input[0])
const n = Number(input,shift());

function findEl(){
  if(n === 1) return true;
  for(let i = 2; i < n.length; i++) {
    if(n%i ===0) return true;
    }
return true;
}

findEl().length;
