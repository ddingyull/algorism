// 2753 윤년
const input = require('fs').readFileSync('/dev/stdin').toString();
let num = Number(input);

const year = (num % 4 === 0 && (num % 100 !== 0 || num % 400 === 0)) ? '1' : '0';

console.log(year);
