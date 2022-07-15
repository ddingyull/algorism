// 10809 알파벳 찾기
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString();

const result = [];

// 아스키 코드에서 a:97, b:122인 점을 참고하여 for문을 돌려준다
for (let i = 97; i <= 122; i++){
  // 실행구문에 사용된 push는 input받은 영어단어에 들어가는게 아니라 출력되는 배열 안에 들어가기 위함이니 착각하지 말자!
  result.push(input.indexOf(String.fromCharCode(i)));
}
/* join()은 배열의 모든 요소를 연결해 하나의 문자열로 만들 때 사용
result값을 " "띄어쓰기를 넣어 join시켜 주는 코드 */
console.log(result.join(" "));