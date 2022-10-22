//달팽이는 올라가고 싶다

const input = require('fs').readFileSync('/dev/stdin').toString().split(' ')

const a = input[0]
const b = input[1]
const v = input[2]

// v = days(a - b) + b 
let days = Math.ceil((v -b)/(a-b))

console.log(days);