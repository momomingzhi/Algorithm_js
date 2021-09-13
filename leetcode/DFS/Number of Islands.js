/**
 * /*
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
 *
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 *
 * Input: grid = [
 *   ["1","1","1","1","0"],
 *   ["1","1","0","1","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","0","0","0"]
 * ]
 * Output: 1
 *
 * @format
 */

var numIslands = function (grid) {
    let ans = 0;
    let n = grid.length;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    const DFS = (x, y) => {
        grid[x][y] = '0';
        for (let k = 0; k < 4; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            if (
                nx >= 0 &&
                nx < n &&
                ny >= 0 &&
                ny < grid[0].length &&
                grid[nx][ny] === '1'
            ) {
                DFS(nx, ny);
            }
        }
    };
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                ans++;
                DFS(i, j);
            }
        }
    }
    //console.log(ans)
    return ans;
};
