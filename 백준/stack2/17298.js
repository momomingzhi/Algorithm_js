/*
크기가 N인 수열 A = A1, A2, ..., AN이 있다. 수열의 각 원소 Ai에 대해서 오큰수 NGE(i)를 구하려고 한다. 
Ai의 오큰수는 오른쪽에 있으면서 Ai보다 큰 수 중에서 가장 왼쪽에 있는 수를 의미한다. 
그러한 수가 없는 경우에 오큰수는 -1이다.

예를 들어, A = [3, 5, 2, 7]인 경우 NGE(1) = 5, NGE(2) = 7, NGE(3) = 7, NGE(4) = -1이다. 
A = [9, 5, 4, 8]인 경우에는 NGE(1) = -1, NGE(2) = 8, NGE(3) = 8, NGE(4) = -1이다.
N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에 수열 A의 원소 A1, A2, ..., AN (1 ≤ Ai ≤ 1,000,000)

4
3 5 2 7

5 7 7 -1

 */
var fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, m] = fs.readFileSync("./input.txt").toString().trim().split("\n");
const arr = m.split(" ").map((x) => +x);

let res = Array(arr.length).fill(-1);
let stack = [arr[arr.length-1]];
const top = (arr) => arr[arr.length-1];
for(let i=arr.length-2;i>=0;i--){
  while(stack.length>0){
    console.log(top(stack),arr[i])
    if(top(stack)>arr[i]){
      res[i] = top(stack);
      break;  
    }
    stack.pop();  
  }
  stack.push(arr[i]);
  
}
console.log(res)
// let stack = [];
// let flag = {
//   idx: 0,
//   bool: false,
// };
// let max = Math.max(...arr);
// for (let i = 0; i < arr.length; i++) {
//   //console.log(arr[i], stack);
//   if (max === arr[i]) {
//     stack.push(-1);
//   } else if (arr[i] < arr[i + 1]) {
//     stack.push(arr[i + 1]);
//     if (flag) {
//       for (let j = stack.length - 1; j >= i - 1; j--) {
//         if (stack[stack.length - 1] > stack[j]) {
//           stack[j] = stack[stack.length - 1];
//         }
//       }
//     //   console.log("ㅇ아아아:", i - 2);
//       for (let j = i - 1; j >= 0; j--) {
//         if (stack[stack.length - 1] < stack[j]) {
//           stack[j] = -1;
//         }
//       }
//       flag = {
//         idx: i,
//         bool: false,
//       };
//     }
//   } else {
//     if (i === arr.length - 1) {
//       if (flag["bool"]) {
//         for (let j = stack.length - 1; j >= flag["idx"]; j--) {
//           stack[j] = -1;
//         }
//       }
//       stack.push(-1);
//     } else stack.push(arr[i]);
//     flag = {
//       idx: i,
//       bool: true,
//     };
//   }
// }

// console.log(stack);
