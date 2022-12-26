var fs = require("fs");
const [n, ...arr] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
console.log(arr);
