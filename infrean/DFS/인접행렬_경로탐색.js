/*
▣ 입력설명
첫째 줄에는 정점의 수 N(1<=N<=20)와 간선의 수 M가 주어진다. 그 다음부터 M줄에 걸쳐 연
결정보가 주어진다.
▣ 출력설명
총 가지수를 출력한다.
▣ 입력예제 1 
5 9
1 2 
1 3
1 4 
2 1 
2 3 
2 5 
3 4 
4 2 
4 5 
▣ 출력예제 1
6
*/
const solve = (n, arr) => {
  //1번 정점에 갔다가 다시 못오게 해야해 체크 배열 필요
  let ans = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  let path = [];
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }
  function DFS(v) {
    if (v === n) {
      ans++;
      console.log(path);
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          path.push(i);
          DFS(i);
          //check 풀어주기
          ch[i] = 0;
          path.pop(); //넣었던거 여기선 빼줘야함
        }
      }
    }
  }
  path.push(1);
  ch[1] = 1; //이거 안해주면  1-> 2-> 1 -> 3 -> 4 -> 5 이경우까지 되어버림 맨 처음에 1 체크안해줘서
  DFS(1);
  return ans;
};

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
