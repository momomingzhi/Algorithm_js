/*
Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.

Return the number of closed islands.

 

Example 1:



Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
Output: 2
Explanation: 
Islands in gray are closed because they are completely surrounded by water (group of 1s).
Example 2:



Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
Output: 1
Example 3:

Input: grid = [[1,1,1,1,1,1,1],
               [1,0,0,0,0,0,1],
               [1,0,1,1,1,0,1],
               [1,0,1,0,1,0,1],
               [1,0,1,1,1,0,1],
               [1,0,0,0,0,0,1],
               [1,1,1,1,1,1,1]]
Output: 2

*/
const outOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;

var closedIsland = function (grid) {
  let m = grid.length,
    n = grid[0].length;
  let goodLand;
  const dfs = (i, j) => {
    if (outOfBounds(i, j, m, n)) {
      goodLand = false;
      return;
    }
    if (grid[i][j] === 1) return;
    if (grid[i][j] === -1) return;
    grid[i][j] = -1;
    dfs(i - 1, j) || dfs(i + 1, j) || dfs(i, j - 1) || dfs(i, j + 1);
  };
  let cnt = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        goodLand = true;
        dfs(i, j);
        if (goodLand) cnt++;
      }
    }
  }
  return cnt;
};
