/*
10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력합
니다.
입력

3 2
3 6 9

출력

3 6
3 9
6 3
6 9
9 3
9 6
6
*/
const solve = (m, arr) => {
  //중복 순열 허용하지 않아야해서 visited 필요
  let ans = [];
  let n = arr.length;
  let ch = Array.from({ length: n }, () => 0);
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L) {
    if (L === m) {
      ans.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return ans;
};
console.log(solve(2, [3, 6, 9, 5]));
