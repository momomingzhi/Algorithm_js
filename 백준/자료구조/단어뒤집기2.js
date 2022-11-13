const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().split(" ");

let stack = [];
let str = "",
  tmp = "";
for (let i = 0; i < input.length; i++) {
  if (input[i] === "<") {
    stack.push("<");
    str += tmp.split("").reverse.join("") + input[i];
    tmp = "";
  } else if (input[i] === ">") {
    stack.pop();
    str += tmp + input[i];
    tmp = "";
  } else if (input[i] === " ") {
    str += (!stack.length ? tmp.split("").reverse().join("") : tmp) + " ";
    tmp = "";
  }
  tmp += input[i];
}
console.log((str + tmp.split("").reverse().join("")).replace(/\n/g, ""));
