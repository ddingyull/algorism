//2751수정렬하기


let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
input.shift();

// let num = []
// num.push(input.sort((a,b) => a-b))
let answer = input.sort((a,b) => a-b);
console.log(answer.join('\n'));


