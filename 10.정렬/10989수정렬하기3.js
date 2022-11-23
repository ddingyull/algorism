//10989 수 정렬하기3

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
input.shift();

for (let i = 0; i <= max; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j] === i) {
      count++;
    }
  }
  newArr[i] = count;
  if (count !== 0) {
    for (let k = 0; k < newArr[i]; k++) {
      console.log(i);
    }
  }
  count = 0;
}