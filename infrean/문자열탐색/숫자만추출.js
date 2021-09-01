/**
 ▣ 입력설명
첫 줄에 숫자가 썩인 문자열이 주어집니다. 문자열의 길이는 50을 넘지 않습니다.
▣ 출력설명
첫 줄에 자연수를 출력합니다.
▣ 입력예제 1 
g0en2T0s8eSoft
▣ 출력예제 1
208

 */
function solution(str) {
  let answer = "";
  for (let x of str) {
    if (!isNaN(x)) answer += x;
    //parseInt 하지말라고 하면
    if (!isNaN(x)) answer = answer * 10 + Number(x);
  }
  return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
