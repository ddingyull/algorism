//백준 제출 할 때 주석 제거
const readFileSyncAddress = '/dev/stdin';

//VSC 테스트 할 때 주석 제거
// const readFileSyncAddress = 'input.txt';


// 2581 소수
// 소수 : 1과 자기 자신만으로 나누어 떨어지는 1보다 큰 양의 정수를 의미함 
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/).slice(1).map(Number)

// const answer = input.filter(x=>{
//   if(m <= x <= n){
//     if(x===1) return;
//     for(let i=2; i*i<=x; i++){
//         if(x % i === 0) return;
//       }
//   }
// })

// console.log(
//   if(
//     sum(answer));
// console.log(min(answer));


//답1
// let fs = require('fs');
// let input = fs.readFileSync('예제.txt').toString().split('\n');

// //a이상 b이하라고 한다면
// let a = Number(input[0]);
// let b = Number(input[1]);
// let primeNumbers = [];
// let sum = 0;

// for(let target = a; target <= b; target++){
//     for(let p = 2; p <= target; p++){
//         if(p*p > target){
//             primeNumbers.push(target);
//             sum += target;
//             break;
//         }
//         if(target % p === 0){
//             break;
//         }
//     }
// }
// if(primeNumbers.length === 0){
//     console.log(-1);
// }else{
//     console.log(sum);
//     console.log(primeNumbers[0]);
// }

//답2
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

// 어차피 문자는 두개밖에 없으므로 이렇게 배열을 만든다.
// 이제서야 안 사실이지만 split() 메서드를 이용하면 그냥 문자열이 배열이 된다.
const [m, n] = input.split(" ").map(v => Number(v));

// object 객체를 만든다.
// 1은 소수가 아니므로 미리 빼준다.
const prime = { 1: true };

// 2부터 제곱근까지만 구해준다. 어차피 결과값이 2 이상이면 소수가 아니기 때문이다.
for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
  // 2) prime[i]이 있는지 확인하고, 있으면 for문을 다시 돌려 i++ 해준다.
  if (prime[i]) {
    continue;
  }
  // 1) i의 거듭제곱으로 구하는 이유는,
  // 어차피 그 전까지의 값은, 이미 이전의 i값으로 계산 되었기 때문이다.
  for (let j = i ** 2; j <= n; j += i) {
    prime[j] = true;
  }
}

const results = [];

// 이제 본 문제인 n값부터 m값 사이의 값을 구한다!
for (let i = m; i <= n; i++) {
  // prime[i]가 선언되지 않았다(undefined)면 소수이다.
  // undefined 앞에 !를 붙이면 true가 된다!
  if (!prime[i]) {
    results.push(i);
  }
}

// 각각의 배열에 개행(\n)을 넣어서 1) 문자열로 합쳐주고, 2) 출력한다.
console.log(results.join("\n"));
