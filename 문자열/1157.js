//백준 제출 할 때 주석 제거
const readFileSyncAddress = '/dev/stdin';

//VSC 테스트 할 때 주석 제거
// const readFileSyncAddress = 'input.txt';


// 1157 문자열 반복
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// input으로 들어오는 문자열을 모두 대문자로 변환하는 코드
const newInput = input.toUpperCase();

/* new Array(26) : 자바스크립트의 유니코드 기준으로 알파벳의 개수만큼 있는 새로운 배열을 만들어주고
.fill(0)으로 초기화를 시켜준다 원래는 배열의 index의 시작~끝 직전까지 정적인 값 1개로 채우는 메서드임*/
const countArr = new Array(26).fill(0);
let str = [];

for( let i = 0; i <input.length; i++) {
  /*1) charCodeAt(i) : i의 문자를 유니코드(=파이썬에서 아스키 코드)번호로 바꾸고(=nexInput)
  2) 1)에서 대문자A를 의미하는 65를 빼줘야함 : newInput - 65 = 0 -> counArr[0]+1을 시작으로 for문 돌아감*/
  countArr[newInput.charCodeAt(i) -65]++;
}

const max = Math.max(...countArr);
const index = countArr.indexOf(max);

let sameRate = flase;

for (let i = 0; i <26; i++) {
  if(countArr[i] === max && index != i) {
    sameRate = true;
    break;
  }
}

console.log(sameRate ? "?" : String.fromCharCode(index + 65));

