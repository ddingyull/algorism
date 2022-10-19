//백준 제출 할 때 주석 제거
const readFileSyncAddress = '/dev/stdin';

//VSC 테스트 할 때 주석 제거
// const readFileSyncAddress = 'input.txt';


// 2908 문자열 반복
//split의 space를 기준으로 띄어서 문자를 받겠다는 의미라서 꼭 띄어쓰기를 해줘야한다!
const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

/*1) input값의 0번째를 split로 나누고, reverse로 뒤집어준 후 ''를 기준으로 join(합쳐준다는) 의미
2) 단, 문자열이기 때문에 Number로 정수로 만들어줘야한다*/
const a = Number(input[0].split('').reverse().join(''));
const b = Number(input[1].split('').reverse().join(''));


console.log(a > b ? a : b);

//위 콘솔로그를 아래와 같이 풀어서 작성할 수 있다 
/*if ( a > b ) {
    console.log(a);
  } else {
   console.log(b);
  } */
