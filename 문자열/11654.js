// [11654]아스키 코드
// fs 모듈 불러오기
const fs = require('fs');
// fs 모듈 안에서 stdin을 불러오기 (trim()함수 넣어주는 것도 가능)
const input = fs.readFileSync("/dev/stdin").toString();

/* charCodeAt는 문자열에 지정된 인텍스에 있는 문자 유니 코드를 반환하는 메서드라서
input에서 받은 내용을 반환시켜준다*/
const answer = input.charCodeAt();
console.log(answer)
