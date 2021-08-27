/*
첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다. 
▣ 출력설명
첫 번째 줄에 회문 문자열인지의 결과를 YES 또는 NO로 출력합니다.
▣ 입력예제 1 
gooG
▣ 출력예제 1
YES


*/
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] != s[len - i - 1]) return "NO";
  }
  //아님
  s.split("").reverse().join();
  return answer;
}

let str = "goooG";
console.log(solution(str));
