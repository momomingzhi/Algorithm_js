/**
 * /*
 * Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.
 *
 * Return the number of closed islands.
 *
 *
 *
 * Example 1:
 *
 *
 *
 * Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
 * Output: 2
 * Explanation:
 * Islands in gray are closed because they are completely surrounded by water (group of 1s).
 * Example 2:
 *
 *
 *
 * Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
 * Output: 1
 * Example 3:
 *
 * Input: grid = [[1,1,1,1,1,1,1],
 *                [1,0,0,0,0,0,1],
 *                [1,0,1,1,1,0,1],
 *                [1,0,1,0,1,0,1],
 *                [1,0,1,1,1,0,1],
 *                [1,0,0,0,0,0,1],
 *                [1,1,1,1,1,1,1]]
 * Output: 2
 *
 * @format
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
    let cnt = 0;
    let rows = grid.length;
    let cols = grid[0].length;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    let visited = Array.from(Array(rows), () => Array(cols).fill(0));
    let queue = [[1, 1]];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (!grid[i][j]) {
                queue.push([i, j]);
            }
        }
    }
    const solve = (x, y) => {
        console.log('바깥: ', x, y);
        for (let k = 0; k < 4; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            if (
                nx >= 0 &&
                nx < rows &&
                ny >= 0 &&
                ny < cols &&
                !visited[nx][ny] &&
                !grid[nx][ny]
            ) {
                visited[nx][ny] = 1;
                let tmpCnt = counter(nx, ny);
                // console.log(nx,ny,tmpCnt)
                if (tmpCnt) {
                    solve(nx, ny);
                }
            }
        }
        return true;
    };
    const counter = (x, y) => {
        let tmpCnt = 0;
        for (let k = 0; k < 4; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            if (
                nx >= 0 &&
                nx < rows &&
                ny >= 0 &&
                ny < cols &&
                !visited[nx][ny]
            ) {
                if (grid[nx][ny]) tmpCnt++;
            }
        }
        return tmpCnt;
    };
    while (queue.length) {
        let [x, y] = queue.shift();
        let tmpCnt = counter(x, y);
        if (tmpCnt === 4) {
            //사방이 전부 4일 경우
            cnt++;
            visited[x][y] = 1;
        } else if (tmpCnt > 0) {
            visited[x][y] = 1;
            const res = solve(x, y);
            console.log('res: ', res);
            cnt++;
        }
    }
    console.log(cnt);
};
