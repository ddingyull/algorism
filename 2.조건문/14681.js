// 14681 사분면 고르기
const [x, y] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

if(x > 0 ) y > 0 ? console.log(1) : console.log(4);
if(x < 0 ) y > 0 ? console.log(2) : console.log(3);


// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
// const input = []


// if(x > 0 && y > 0) {
//   return '1'
// } 
// else if (x < 0 && y > 0) {
//   return '2'
// }
// else if (x > 0 && y < 0) {
//   return '3'
// }
// else{
//   return '4'
// }

