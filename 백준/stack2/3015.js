/*
오아시스의 재결합 공연에 N명이 한 줄로 서서 기다리고 있다.

이 역사적인 순간을 맞이하기 위해 줄에서서 기다리고 있던 백준이는 갑자기 자기가 볼 수 있는 사람의 수가 궁금해 졌다.

두 사람 A와 B가 서로 볼 수 있으려면, 두 사람 사이에 A 또는 B보다 키가 큰 사람이 없어야 한다.

줄에 서있는 사람의 키가 주어졌을 때, 서로 볼 수 있는 쌍의 수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 줄에서 기다리고 있는 사람의 수 N이 주어진다. (1 ≤ N ≤ 500,000)

둘째 줄부터 N개의 줄에는 각 사람의 키가 나노미터 단위로 주어진다. 모든 사람의 키는 231 나노미터 보다 작다.

사람들이 서 있는 순서대로 입력이 주어진다.

7
2
4
1
2
2
5
1

10
 */
var fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...m] = fs.readFileSync("./input.txt").toString().trim().split("\n");
const arr = m.map((x) => +x);
const top = (arr) => arr[arr.length - 1];
let stack = [];
let ans = 0;
for(let i=0;i<n;i++){
  console.log({stack})
  while(stack.length && top(stack)[0]<arr[i]){
    ans += top(stack)[1];
    stack.pop();
  }
  let val = 1;
  if(stack.length && top(stack)[0] == arr[i]){
    val += top(stack)[1];
    ans += top(stack)[1];
    stack.pop();
  }
  if(stack.length) ans++;
  stack.push([arr[i],val])
}
console.log(ans)
// let res = Array(arr.length).fill(-1);
// let stack = [{
//     value : arr[arr.length - 1],
//     to : arr.length -1
// }];
// for (let i = arr.length - 2; i >= 0; i--) {
//   while (stack.length > 0) {
//    console.log(top(stack).value, arr[i], stack);
//     if (top(stack).value > arr[i]) {
//       res[i] = {
//         ...top(stack),
//         from: i,
//       };
//       break;
//     }
//     stack.pop();
//   }
//   stack.push({
//     value: arr[i],
//     to: i,
//   });
// }
// console.log({res})
// let cnt = 1;
// for(let i=0;i<res.length;i++){
//     if(res[i] !== -1)
//     cnt += res[i].to - res[i].from
// }
// console.log(cnt)
