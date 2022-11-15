//253005 커트라인

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const Num = input[0].split(' ')[0]
const awardNum = input[0].split(' ')[1]

const score = input[1].split(' ')


score.sort((a,b) => b-a);  //내림차순으로 높은 점수부터 나열하기

console.log(score[awardNum-1]);
