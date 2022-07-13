//백준 제출 할 때 주석 제거
const readFileSyncAddress = '/dev/stdin';

//VSC 테스트 할 때 주석 제거
// const readFileSyncAddress = 'input.txt';


// 1157 문자열 반복
const input = require('fs').readFileSync('/dev/stdin').toString();

// input으로 들어오는 문자열을 모두 대문자로 변환하는 코드
const newInput = input.toUpperCase();

/* new Array(26) : 자바스크립트의 유니코드 기준으로 알파벳의 개수만큼 있는 새로운 배열을 만들어주고
.fill(0)으로 초기화를 시켜준다 --> 초기화를 시켜준다는 의미는 0으로 가득차 있는 array를 만든다는 의미이다
:array의 26개가 모두 0, 곧 모든 알파벳은 0개 사용되었다고 적어주고 이후 아래 for문을 통해 숫자가 들어갈 예정이다 */
const countArr = new Array(26).fill(0);

for( let i = 0; i <input.length; i++) {
  /*1) charCodeAt(i) : i의 문자를 유니코드(=파이썬에서 아스키 코드)번호로 바꾸고(=nexInput)
  2) 위의 1)에서 대문자A를 의미하는 65를 빼줘야함 : newInput - 65 = 0 -> counArr[0]+1을 시작으로 for문 돌아감
  ---> 다시한번 설명하지만 소문자 a와 대문자 A의 유니코드 숫자가 다른데 모두 대문자로 만들어준 상황이라서 
  대문자 A를 의미하는 65를 빼줘서 대문자끼리는 0부터 숫자를 쓰기 위함이라고 생각한다 */
  countArr[newInput.charCodeAt(i) - 65]++;
}

const max = Math.max(...countArr);
const index = countArr.indexOf(max);

// 아래 if문에서 true여야 break가 되기 때문에 true를 사용해주기 위해서 sameRate를 false로 먼저 선언해준 것 
let sameRate = false;

/* 1) 26은 알파벳 개수라서 배열에 26개 자리가 있기 때문에 for문을 돌려주는데
2) 배열의 가장큰 알파벳의 유니코드와 위에서 정의한 index의 숫자가 같을 경우 가장 큰 알파벳이다 
때문에 가장큰 알파벳의 유니코드의 숫자가 같지만 + index의 i숫자는 다를 경우 알파벳이 중복사용되었기 때문에
바로 true값으로 설정해서 break해서 ?를 출력한다 
*/
for (let i = 0; i <26; i++) {
  if(countArr[i] === max && index != i) {
    sameRate = true;
    break;
  }
}

console.log(sameRate ? "?" : String.fromCharCode(index + 65));

