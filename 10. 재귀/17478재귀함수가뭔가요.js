//백준 제출 할 때 주석 제거
const readFileSyncAddress = '/dev/stdin';

//VSC 테스트 할 때 주석 제거
// const readFileSyncAddress = 'input.txt';


// 17478 재귀함수가 뭔가요?
const n = require('fs').readFileSync('/dev/stdin').toString();
let input = Number(n);


const lastP = toString('"재귀함수가 뭔가요?", "재귀함수는 자기 자신을 호출하는 함수라네", "라고 답변하였지."').split('\n');
for(let i = 0; i<input; )