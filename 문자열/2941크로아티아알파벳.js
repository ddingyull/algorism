//백준 제출 할 때 주석 제거
const readFileSyncAddress = '/dev/stdin';

//VSC 테스트 할 때 주석 제거
// const readFileSyncAddress = 'input.txt';


// 2941 크로아티아 알파벳

/* input에 크로아티아 알파벳으로 되어있는 단어를 입력받는다. 
단, 글자들을 확인해주기 위해 불필요한 띄어쓰기로 인한 에러를 방지하기 위해 .trim()을 추가한다 */
const input = require('fs').readFileSync('/dev/stdin').toString().trim();


// alpha라는 이름으로 크로아티아 알파벳 배열을 만든다
const alpha = ['c=','c-','dz=','d-','lj','nj','s=','z=']


/*1) input값으로 답을 구하는 함수 하나를 만든다 
2) alpha배열의 아이템들을(크로아티아알파벳들) words라는 이름의 변수에 넣어 반복시켜준다
3) input값을 "input.split(words).join('*')" 시켜준다
-> input으로 받은 입력값을 words 아이템값을 기준으로 split하고(=쪼개고)
-> 쪼개진 각각의 알파벳을 "*"로 교체하여 넣어준고 *의 개수(=input.length)를 반환한다
4) 콘솔로그로 출력!!*/
function solution(input) {
  for(let words of alpha) {
    input = input.split(words).join('*');
  }
  return input.length;
}
console.log(solution(input));

