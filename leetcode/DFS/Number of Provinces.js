/*
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.
*/
// 연결되어 있는 노드랑 안되어있는 노드 총 개수
// 이중 for문으로 하는 바람에 산으로 갔다...
var findCircleNum = function (isConnected) {
  let n = isConnected.length;
  let visited = Array.from({ length: n }, () => 0);
  let count = 0;

  const solve = (idx) => {
    for (let i = 0; i < n; i++) {
      if (!visited[i] && isConnected[idx][i]) {
        visited[i] = 1;
        solve(i);
      }
    }
  };
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = 1;
      count++;
      solve(i);
    }
  }
  return count;
};
