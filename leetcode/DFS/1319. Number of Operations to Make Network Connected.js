/**
 * There are n computers numbered from 0 to n-1 connected by ethernet cables connections forming a network where connections[i] = [a, b] represents a connection between computers a and b. Any computer can reach any other computer directly or indirectly through the network.

Given an initial computer network connections. You can extract certain cables between two directly connected computers, and place them between any pair of disconnected computers to make them directly connected. Return the minimum number of times you need to do this in order to make all the computers connected. If it's not possible, return -1. 

 

Example 1:



Input: n = 4, connections = [[0,1],[0,2],[1,2]]
Output: 1
Explanation: Remove cable between computer 1 and 2 and place between computers 1 and 3.
Example 2:



Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2],[1,3]]
Output: 2
Example 3:

Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2]]
Output: -1
Explanation: There are not enough cables.
Example 4:

Input: n = 5, connections = [[0,1],[0,2],[3,4],[2,3]]
Output: 0
 * 
 */
/*
1267 count servers that communicate 랑 비슷한 문제
구현 방법은 얼핏 비슷했는데 맨 처음에 각 노드에 연결되어 있는 노드
를 어떻게 서로 알려줘야하나 고민이 컸다..
그런 부분은  721.accounts merge랑 비슷!
*/
var makeConnected = function (n, connections) {
  let edges = connections.length;
  // 존재하는 노드보다 케이블 선이 작으면 당연히 연결 안됨
  if (edges < n - 1) return -1;
  //각 노드에 연결 되어있는 노드
  let g = [];
  for (let i = 0; i < n; i++) g[i] = [];
  for (let i = 0; i < edges; i++) {
    g[connections[i][0]].push(connections[i][1]);
    g[connections[i][1]].push(connections[i][0]);
  }
  console.log(g);
  /*
    0에는 1,2 1에는 0,2 2에는 0,1이 연결되어있다.
    노드는 총 4개이기때문에 아무것도 연결되지 않은 3번까지 나오도록!
    [ [ 1, 2 ], [ 0, 2 ], [ 0, 1 ], [] ]
    */
  let v = Array(n).fill(0),
    cnt = 0;
  for (let i = 0; i < n; i++) {
    if (!v[i]) {
      cnt++;
      dfs(i);
    }
  }
  //이건 왜 하는지 아직 모르겠다...
  return cnt - 1;

  function dfs(i) {
    v[i] = 1;
    for (let x of g[i]) {
      console.log(g[i], x);
      /*
            [ 1, 2 ] 1
            [ 0, 2 ] 0
            [ 0, 2 ] 2
            [ 0, 1 ] 0
            [ 0, 1 ] 1
            [ 1, 2 ] 2
            */
      if (!v[x]) dfs(x);
    }
  }
};
