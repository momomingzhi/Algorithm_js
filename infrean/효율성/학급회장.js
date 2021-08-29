/*
▣ 입력설명
첫 줄에는 반 학생수 N(5<=N<=50)이 주어집니다.
두 번째 줄에 N개의 투표용지에 쓰여져 있던 각 후보의 기호가 선생님이 발표한 순서대로 
문자열로 입력됩니다.
▣ 출력설명
학급 회장으로 선택된 기호를 출력합니다. 
▣ 입력예제 1 
15
BACBACCACCBDEDE
▣ 출력예제 1
C

*/
function solution(k, arr) {
  let answer = 0;
  let sH = new Map();
  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  let max = Number.MAX_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (val > max) {
      max = value;
      answer = key;
    }
  }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
