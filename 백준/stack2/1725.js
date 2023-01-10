/*
7
2
1
4
5
1
3
3

8

첫 행에는 N (1 ≤ N ≤ 100,000) 이 주어진다. 
N은 히스토그램의 가로 칸의 수이다. 
다음 N 행에 걸쳐 각 칸의 높이가 왼쪽에서부터 차례대로 주어진다. 
각 칸의 높이는 1,000,000,000보다 작거나 같은 자연수 또는 0이다.
 */

var fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...m] = fs.readFileSync("./input.txt").toString().trim().split("\n");
const arr = m.map((x) => +x);
const top = (arr) => arr[arr.length - 1];
let stack = []
let height = 0;
let width = 0;
let res = 0;

for (let i = 0; i < arr.length; i++) {
 // console.log('##:',stack,i)
  while (stack.length > 0 && arr[top(stack)] > arr[i]) {
    height = arr[top(stack)];
    stack.pop();
    width = i;
    if (stack.length) {
      width = i - top(stack) - 1;
    }
    res = Math.max(res, width * height);
  }
  stack.push(i);
}
while(stack.length){
  height = arr[top(stack)];
  stack.pop();
  width = n;
  if(stack.length){
    width = n - top(stack) - 1;
  }
  res = Math.max(res,width * height);
}
console.log(res)
// var fs = require("fs");
// // const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let [n, ...m] = fs.readFileSync("./input.txt").toString().trim().split("\n");
// const arr = m.map((x) => +x);
// let stack = [arr[0]];
// let stack2 = [arr[arr.length - 1]];
// let res = Array(arr.length).fill({ idx: -1, value: -1 });
// let res2 = Array(arr.length).fill({ idx: -1, value: -1 });
// const top = (array) => array[array.length - 1];
// for (let i = 1; i < arr.length; i++) {
//   while (stack.length > 0) {
//     console.log('ddkkdkdk')
//     if (arr[i] < top(stack)) {
//       res[i] = { idx: i, value: top(stack) };
//       stack.pop();
//       break;
//     }
//     else if( arr[i] < top(stack) && i === arr.length-1){
//         res[i] = { idx: i, value: top(stack) };
//         stack.pop();
//         break;

//     }
//     console.log('나옴',{stack})

//   }
//   console.log('들어옴',i,stack)
//   stack.push(arr[i]);
// }
// for (let i = arr.length - 2; i >= 0; i--) {
//   while (stack2.length > 0) {
//     if (arr[i] < top(stack2)) {
//       res2[i] = { idx: i, value: top(stack2) };
//       break;
//     }
//     stack2.pop();
//   }
//   stack2.push(arr[i]);
// }
// const sum = (res) => {};
// console.log(res, res2);
