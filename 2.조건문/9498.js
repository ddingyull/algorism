// 9498 시험 성적
const input = require('fs').readFileSync('/dev/stdin').toString();
let test = parseInt(input);

if(test >= 90) {
  console.log('A');
} else if (test >= 80) {
  console.log('B');
} else if (test >= 70) {
  console.log('C');
} else if (test >= 60) {
  console.log('D');
} else {
  console.log('F');
}