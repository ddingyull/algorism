// 2884 알람 시계 : 45분 일찍 알람 설정하기
// let [hour, min] = require('fs').readFileSync('/dev/stdin').toString().split('').map(Number);

// min -= 45;

// if (min >= 45) {
//   hour, (min - 45)
// } 
// else if (min <= 45) {
//   (hour-1), 60-(min - 45)
// }
// else if(min = 0) {
//   (hour-1), min
// }

let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

let hour = Number(input[0]);  // Hour
let minute = Number(input[1]);  // Minute

minute -= 45;

if (minute < 0) {
    minute += 60;
    hour--;

    if (hour === -1) {
        hour = 23;
    }
}

console.log(hour + ' ' + minute);




