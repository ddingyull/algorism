//백준 제출 할 때 주석 제거
// const readFileSyncAddress = '/dev/stdin';

//VSC 테스트 할 때 주석 제거
// const readFileSyncAddress = 'input.txt';


// 5622 다이얼

// 알파벳 대문자로 이루어진 대문자를 input으로 받음
const fs = require("fs");
const input = require('fs').readFileSync('/dev/stdin').toString();

// 각 버튼별로 소요되는 시간을 넣어줌
let dail = {
  2 :'ABC',
  3 :'DEF',
  4: 'GHI',
  5 :'JKL',
  6: 'MNO',
  7 :'PQRS',
  8 :'TUV',
  9 :'WXYZ'
};

let sec = 0;
/*1번째 for : 문자로 입력받은 알파벳들을 전화번호개수만큼 돌려주되
2번째 for : 시간을 for문으로 돌려줘서 
==> 문자로 입력받은 알파벳과 시간을 나열해준다 
그리고 if문 : input의 i값이 dail의 j에 포함되어져있다면 sec(시간)에 j만큼의 시간을 더해준다
더했다면 break를 해서 다시 반복문이 돌아갈 수 있도록 해준 후 최종적인 sec를 반환시키기!

참고) .includes()메소드 : 배열이 값을 포함하는지 확인하는 용도*/
for(let i=0; i<input.length; i++) {
  for(let j=2; j<10; j++) {
    if(dail[j].includes(input[i])) {
      sec += j + 1;
      break;
    }
  }
}
console.log(sec);

