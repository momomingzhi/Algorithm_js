/*
▣ 입력설명
첫째 줄에 자연수 n(3<=n<=33)과 r(0<=r<=n)이 입력됩니다.
▣ 출력설명
첫째 줄에 조합수를 출력합니다.
▣ 입력예제 1 
5 3
▣ 출력예제 1
10
*/
const solve = (n, r) => {
  //조합의 경우의 수 5C3 = 4C2 + 4C3
  let ans;
  function DFS(n, r) {
    if (n === r || r === 0) return 1;
    else return DFS(n - 1, r - 1) + DFS(n - 1, r);
  }
  ans = DFS(n, r);
  return ans;
};
console.log(solve(5, 3));
//메모이제이션으로 풀때
const solve = (n, r) => {
  //조합의 경우의 수 5C3 = 4C2 + 4C3
  let ans;
  let dy = Array.from(Array(35), () => Array(35).fill(0));
  Array.from(Array(3), () => Array(5).fill(0)); //3행5열
  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }
  ans = DFS(n, r);
  return ans;
};
console.log(solve(33, 19));
