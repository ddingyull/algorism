//부녀회장이 될테야!

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

let k = input.shift(); //k층
let n = input[1]; //n층

// for (let t = 0; t < +input[0]; t++) {
//   const k = +input[t * 2 + 1];
//   const n = +input[t * 2 + 2];
//   const house = Array(k + 1).fill().map(_ => Array(n + 1).fill(0));

//   for (let i = 0; i <= k; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (i > 0) break;
//       house[i][j] = j;
//     }
//   }

//   for (let i = 1; i <= k; i++) {
//     for (let j = 1; j <= n; j++) {
//       house[i][j] = house[i - 1][j] + house[i][j - 1];
//     }
//   }
//   console.log(house[k][n]);
// }
