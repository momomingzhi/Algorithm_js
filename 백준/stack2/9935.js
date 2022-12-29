/*
12ab112ab2ab
12ab

 */
var fs = require("fs");
let [arr, bomb] = fs.readFileSync("./input.txt").toString().trim().split("\n");
let stack = [];
let bombIdx = 0;
let idx = 0;
let totalLen = arr.length - 1;
let ddd = 0;
let arrStack = [];
while(1){
    if(ddd === totalLen) break;
    if(arr[idx] == bomb[bombIdx]){
       // console.log('1:',bombIdx,arr[idx],stack,arrStack)
        if(bomb.length -1 == bombIdx){
         //   idx += bombIdx;
            
            stack.pop()
            if(stack[stack.length - 1] && stack[stack.length - 1].length){
             //   console.log('이거: ',stack[stack.length - 1].length)
                bombIdx = stack[stack.length - 1]?.length;
            }
            else
                bombIdx = 0;
          //  console.log('ddd',arr)
        }
        else if(bombIdx == 0){
            stack.push(arr[idx]);
            bombIdx++;
        }
            
        else{
            stack[stack.length - 1] += arr[idx];
            bombIdx++;
        }
            
        
        idx++;
      //  console.log('나옴:',bombIdx,idx,stack,arrStack)
        continue;
    }
    if(stack[stack.length - 1] && stack[stack.length - 1]?.length -1 !== bombIdx){
        //c4중에서 다음에 4가 들어올것을 예상했는데 c가 들어온다면?
        // 다음에 
      //  console.log('2:',bombIdx,arr[idx],stack,arrStack)
        stack.push(arr[idx])
        bombIdx = 1;
    }
    else{
      //  console.log('3:',stack[stack.length - 1],bombIdx,bomb[bombIdx],arr[idx],bomb[bombIdx]==arr[idx],stack,arrStack)
        arrStack.push(arr[idx]);  
    }
      
        
    
    idx++;  
    ddd++;
}

const res = arrStack.join('');
if(!res.length)
    console.log('FRULA')
else
    console.log(res.join(''))
