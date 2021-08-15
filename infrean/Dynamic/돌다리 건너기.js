/*
 입력설명
첫째 줄은 돌의 개수인 자연수 N(3≤N≤45)이 주어집니다. 
▣ 출력설명
첫 번째 줄에 개울을 건너는 방법의 수를 출력합니다.
▣ 입력예제 1 
7
▣ 출력예제 1
34

세 칸을 뛰게 되면
i = 3부터
dy[i] =  dy[i-3] + dy[i-2] + dy[i-1]
*/

function solution(n) {
  let answer = 0;
  let dy = Array.from({ length: n + 2 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n + 1; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  //n까지 가는게 아니라 마지막에 한번더 건너줘야해서 n+1 해줘야해
  answer = dy[n + 1];
  return answer;
}

console.log(solution(7));
