//분수찾기

const inputOut = require('fs').readFileSync('/dev/stdin')

let input = Number(inputOut)
let sum = 0
let lineCount = 0

while (true){
  if(sum < input){
    lineCount += 1
    sum += lineCount;
  } else {
    break;
  }
}

let a = input - (sum - lineCount);

if(lineCount % 2 == 0){
  top = a;
  bottom = (lineCount+1) - a;
} else{
  top = (lineCount + 1) -a;
  bottom = a;
}

console.log(top + '/' + bottom);
