/*
12ab112ab2ab
12ab

 */
var fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [str, bomb] = fs.readFileSync('./input.txt').toString().trim().split("\n");
let stack = [];
let len = bomb.length - 1;
for(let i=0;i<str.length;i++){
    let flag = false;
    if(str[i] === bomb[len]){
        //c4의 마지막글자와 같을 경우
        for(let j=0;j<len ;j++){
            if(stack[stack.length - (j+1)] === bomb[len - (j+1)]){
                continue;
            }
            flag = true;
            break;
        }
        if(flag){
            stack.push(str[i]);
        }else{
            for(let k=0;k<len;k++){
                stack.pop();
            }
        }
    }else{
        stack.push(str[i]);
    }
}
let res = stack.join('');
if(res === ''){
    console.log('FRULA');
}else{
    console.log(stack.join(''))
}