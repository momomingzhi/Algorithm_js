/*
You are given two m x n binary matrices grid1 and grid2 containing only 0's (representing water) and 1's (representing land). An island is a group of 1's connected 4-directionally (horizontal or vertical). Any cells outside of the grid are considered water cells.

An island in grid2 is considered a sub-island if there is an island in grid1 that contains all the cells that make up this island in grid2.

Return the number of islands in grid2 that are considered sub-islands.

 

Example 1:


Input: grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]
Output: 3
Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
The 1s colored red in grid2 are those considered to be part of a sub-island. There are three sub-islands.
Example 2:


Input: grid1 = [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]], grid2 = [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]
Output: 2 
Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
The 1s colored red in grid2 are those considered to be part of a sub-island. There are two sub-islands.
*/
// 내코드
var countSubIslands = function (grid1, grid2) {
  let aland = [];
  let bland = [];
  for (let i = 0; i < grid1.length; i++) {
    for (let j = 0; j < grid1[0].length; j++) {
      if (grid1[i][j]) {
        dfs(i, j, grid1, aland);
      }
    }
    for (let i = 0; i < grid2.length; i++) {
      for (let j = 0; j < grid2[0].length; j++) {
        if (grid2[i][j]) {
          dfs(i, j, grid1, bland);
          console.log("아아: ", aland, bland);
        }
      }
    }
    // console.log(aland)
    function compare(grid1, grid2) {
      let visited = Array.from({ length: grid2.length }, () => 0);
      for (let [i1, j1] of grid1) {
        for (let [i2, j2] of grid2) {
          if (i1 === i2 && j1 === j2) {
          }
        }
      }
    }
    function dfs(i, j, grid, res) {
      if (
        i < 0 ||
        j < 0 ||
        i >= grid.length ||
        j >= grid[0].length ||
        grid[i][j] !== 1
      ) {
        return;
      }
      grid[i][j] = 0;
      res.push([i, j]);
      dfs(i + 1, j, grid, res);
      dfs(i - 1, j, grid, res);
      dfs(i, j + 1, grid, res);
      dfs(i, j - 1, grid, res);
    }
  }
};
// 좋은 코드
/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
  function dfs(i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid2.length ||
      j >= grid2[0].length ||
      grid2[i][j] !== 1
    ) {
      return 0;
    }
    grid2[i][j] = 0;
    return (
      (grid1[i][j] === 1 ? 0 : 1) +
      dfs(i + 1, j) +
      dfs(i - 1, j) +
      dfs(i, j + 1) +
      dfs(i, j - 1)
    );
  }
  let ans = 0;
  for (let i = 0; i < grid2.length; i++) {
    for (let j = 0; j < grid2[0].length; j++) {
      if (grid2[i][j] === 1) {
        if (dfs(i, j) === 0) {
          ans++;
        }
      }
    }
  }
  console.log(ans);
  return ans;
};
