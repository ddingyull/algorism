// 2563 색종이

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const count = input[0]
const rocation = input[1].split(' ').toString().localeCompare(Number);

const x = (rocation[0] * 100) 