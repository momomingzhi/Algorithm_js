/*
12ab112ab2ab
12ab

 */
var fs = require("fs");
let [arr, bomb] = fs.readFileSync("./input.txt").toString().trim().split("\n");
let stack = [];
let bombIdx = 0;
let flag = false;
for(let i=0;i<arr.length;i++){
    
    if(bomb[bombIdx] === arr[i]){
        flag = true;
        console.log('같음',arr[i],bomb[bombIdx],i,stack,bombIdx)
        if(bombIdx === bomb.length -1){
            //처음부터 끝까지 값이 같다
            stack.pop();
            //bombIdx = stack[stack.length - 1].length -1;
            //stack.push('')
            if(!stack.length){
                bombIdx = 0;
            }else
                bombIdx = stack[stack.length - 1].length;
        }else{
            if(!stack.length){
                stack.push(arr[i]);
            }else{
                stack[stack.length - 1] += arr[i]
            }    
            bombIdx++;
        }
        
    }else{
        flag = false;
        console.log('#####:',stack,arr[i],flag,bombIdx)
        if(!stack.length || (!flag && bombIdx)){
            stack.push(arr[i]);
        }else{
            stack[stack.length - 1] += arr[i]
            bombIdx = 0;
        }
        
    }
    console.log({stack})
}


console.log(stack)