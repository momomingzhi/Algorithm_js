/*
▣ 입력설명
첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다.
식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.
▣ 출력설명
연산한 결과를 출력합니다.
▣ 입력예제 1 
352+*9-
▣ 출력예제 1
12


*/

const solve = (s) => {
  let answer;
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) {
      //숫자면
      stack.push(Number(x));
    } else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return asnwer;
};
let str = "352+*9-";
console.log(solution(str));
