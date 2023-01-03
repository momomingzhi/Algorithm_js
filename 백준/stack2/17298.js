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
let stack = [];
let len = arr.length - 1;
let flag = false;
let max = Math.max(...arr);
console.log(max);
for (let i = 0; i < arr.length; i++) {
  if (max === arr[i]) {
    console.log(max, arr[i]);
    stack.push(-1);
  } else if (arr[i] < arr[i + 1]) {
    stack.push(arr[i + 1]);
    if (flag) {
      for (let j = stack.length - 1; j >= i - 1; j--) {
        console.log(arr[i]);
        if (stack[stack.length - 1] > stack[j]) {
          stack[j] = stack[stack.length - 1];
        }
      }
      flag = false;
    }
  } else {
    stack.push(arr[i]);
    flag = true;
  }
}
if (stack.length - 1 !== -1) stack.push(-1);
console.log(stack);
