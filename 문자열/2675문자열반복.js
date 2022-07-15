//백준 제출 할 때 주석 제거
const readFileSyncAddress = '/dev/stdin';

//VSC 테스트 할 때 주석 제거
// const readFileSyncAddress = 'input.txt';


// 2675 문자열 반복
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

/*shift()는 배열의 첫번째 데이터를 삭제하는 메소드이기 때문에 
input 첫번째 들어오는 테스트케이스는 제외한 것을 기준으로 다시 i를 0부터 받아준다
(ex. 3,apple -> 4,banana -> ... ) 
때문에 첫번째 for문은 반복횟수와 단어자체가 바뀌면서 반복되는 for문이다*/
const num1 = input.shift();

for (let i = 0; i < num1; i++) {
    let answer = ''; //예상하기로는 answer라는 변수의 값을 모두 문자형으로 받는다는 의미(''->레터럴)
    
    /* [반복되는 횟수(num2), 반복시킬 문자(str)]에 i값을 받은 값들을 넣어준다. 
    단, split으로 띄어쓰기를 기준으로 나누어서! */
    const [num2, str] = input[i].split(" ");
    
    /*안쪽 for문 : 위에서 선언한 문자형을 받는 answer변수에 반복시킬 문자를 더하는 것을 num2만큼 한다
    (ex. 3, apple -> aaa)
    바깥 for문 : 안쪽 for문에서 반복한 것을 글자 개수만큼 더 반복한다
    (ex. 3, apple -> aaappppppllleee) */
    for (let j = 0; j < str.length; j++) {
        for (let c = 0; c < num2; c++) {
            answer += str[j];
  	}
    }
    
    console.log(answer);
}