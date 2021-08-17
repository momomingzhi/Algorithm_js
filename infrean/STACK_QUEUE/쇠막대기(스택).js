/**
 ▣ 입력설명
한 줄에 쇠막대기와 레이저의 배치를 나타내는 괄호 표현이 공백없이 주어진다. 괄호 문자의 
개수는 최대 100,000이다. 
▣ 출력설명
잘려진 조각의 총 개수를 나타내는 정수를 한 줄에 출력한다.
▣ 입력예제 1 
()(((()())(())()))(())
▣ 출력예제 1
17
 */
const solve = (s) => {
  let answer;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (x === "(") stack.push(s[i]);
    else {
      // )괄호 만났을때 먼저 빼야해
      stack.pop();
      if (s[i - 1] === "(") answer += stack.length;
      else answer += 1; //
    }
  }
  return answer;
};
