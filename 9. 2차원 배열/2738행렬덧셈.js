//2738 행렬 덧셈

// const answer = 
// [[3, 3]
// [1, 1, 1]
// [2, 2, 2]
// [0, 1, 0]
// [3, 3, 3]
// [4, 4, 4]
// [5, 5, 100]]

// const input = answer.split(' ');
// console.log(input);

// const all = input[0]
// const hang = all.split(' ')[0]
// const yull = all.split(' ')[1]



// const b = input[1]
// const first = b[0]
// const second = b[1]

// all.map(() => {

// })

function solution(arr1, arr2) {
  var answer = [];

  for(let i=0; i<arr1.length; i++){
      let temp = [];
      for(let j=0; j<arr1[i].length; j++){
          temp.push(arr1[i][j] + arr2[i][j])
      }
      answer.push(temp)
  }

  return answer;
}



