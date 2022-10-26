//설탕배달
const input = require('fs').readFileSync('/dev/stdin')


let count = 0
while (ture){
  if(input % 5 === 0){
    console.log(input / 5); //5키로짜리 1개
    count++;
    break
  }
    
  if (input < 0) {
    console.log(-1);
    break;
  }

  input -= 3;
  count++;
}

