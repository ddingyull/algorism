//백준 제출 할 때 주석 제거
const readFileSyncAddress = '/dev/stdin';

//VSC 테스트 할 때 주석 제거
// const readFileSyncAddress = 'input.txt';


// 11653 소인수분해
// 소인수 분해 : 자연수를 소인수로 분해하는 것 (ex. 10의 인수 1,2,5,10 중 소수는 2,5이다)
const n = require('fs').readFileSync('/dev/stdin').toString().split('');
let answer = Number(n);


for(let i =2; i<=answer; i++) {
  while (answer > 1) {
  if (answer % i === 0) {
    console.log(i);
    answer = Math.round(answer/i);
  } else {
    break;
  }
}}


//피드백
// 1. 처음부터 for문을 2부터 시작하도록 세팅하면 코드를 더 줄일 수 있음
//2. arry로 배열을 만들고, arryConsole로 하나씩 push한 후 -> split('\n')하려고했는데
//그것보단 for문 안에 while문을 넣어서 바로 콘솔에 찍어버리는 것이 더 간단하게 끝낼 수 있었음
//3. 그냥 숫자로 받더라도 readfilesync뒤에 tosting으로 받아야한다

// let arry = [];
// let arryConsole = arry.split('\n')