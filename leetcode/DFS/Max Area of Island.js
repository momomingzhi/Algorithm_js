/*
You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

 

Example 1:


Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.
Example 2:

Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0
*/
var maxAreaOfIsland = function (grid) {
  let len = grid.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let max = 0;
  let cnt = 1;
  let visited = Array.from(Array(len), () => Array(grid[0].length).fill(0));

  if (len === 1 && grid[0].length === 1 && grid[0][0]) {
    return 1;
  }
  const dfs = (x, y) => {
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      //console.log(nx,ny)
      if (
        nx >= 0 &&
        nx < len &&
        ny >= 0 &&
        ny < grid[0].length &&
        grid[nx][ny] &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = 1;
        dfs(nx, ny);

        cnt++;
      }
    }
  };
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] && !visited[i][j]) {
        //console.log('안에서: ',i,j)
        visited[i][j] = 1;
        dfs(i, j);
        max = Math.max(max, cnt);
        console.log("max:", max);
        cnt = 1;
      }
    }
  }
  return max;
};
var maxAreaOfIsland = function (grid) {
  let ans = 0,
    n = grid.length,
    m = grid[0].length;
  const trav = (i, j) => {
    if (i < 0 || j < 0 || i >= n || j >= m || !grid[i][j]) return 0;
    grid[i][j] = 0;
    return (
      1 + trav(i - 1, j) + trav(i, j - 1) + trav(i + 1, j) + trav(i, j + 1)
    );
  };
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) if (grid[i][j]) ans = Math.max(ans, trav(i, j));
  return ans;
};
