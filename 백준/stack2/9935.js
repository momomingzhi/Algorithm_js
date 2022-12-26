var fs = require("fs");
let [arr, bomb] = fs.readFileSync("./input.txt").toString().trim().split("\n");
let stack = arr.split("");

while (arr.includes(bomb)) {
  const idx = arr.indexOf(bomb);
  stack.splice(idx, bomb.length);
  arr = stack.join("");
}
console.log(arr.length ? arr : "FRULA");
