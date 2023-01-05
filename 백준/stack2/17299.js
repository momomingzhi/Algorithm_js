/*
7
1 1 2 3 4 2 1
-1 -1 1 2 2 1 -1
 */

var fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, m] = fs.readFileSync("./input.txt").toString().trim().split("\n");
const arr = m.split(" ").map((x) => +x);

let map = {};
let res = Array(arr.length).fill(-1);
let stack = [arr[arr.length-1]];
const top = () => stack[stack.length-1];
for (let i = 0; i < arr.length; i++) {
  if(map[arr[i]]){
      map[arr[i]] = map[arr[i]] + 1;
  }else{
      map[arr[i]] = 1;
  }
}
//console.log({map})
for(let i=arr.length-2;i>=0;i--){
    while(stack.length>0){
       // console.log(top(stack),arr[i],map[top()],map[arr[i]])
        if(map[top()]>map[arr[i]]){
            res[i] = top();
            break;
        }
        stack.pop();
    }
    stack.push(arr[i]);
}
console.log(res);
