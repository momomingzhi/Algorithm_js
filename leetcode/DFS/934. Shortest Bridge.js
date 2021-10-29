/**
 * /*
 * In a given 2D binary array grid, there are two islands.  (An island is a 4-directionally connected group of 1s not connected to any other 1s.)
 *
 * Now, we may change 0s to 1s so as to connect the two islands together to form 1 island.
 *
 * Return the smallest number of 0s that must be flipped.  (It is guaranteed that the answer is at least 1.)
 *
 *
 *
 * Example 1:
 *
 * Input: grid = [[0,1],[1,0]]
 * Output: 1
 * Example 2:
 *
 * Input: grid = [[0,1,0],[0,0,0],[0,0,1]]
 * Output: 2
 * Example 3:
 *
 * Input: grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
 * Output: 1
 *
 * @format
 */

/*
2개로 나눠서 봐야한다고는 생각했는데 구현할 방법을 몰랐음
     0 1
     1 0
이렇게 되어있는걸
     1 1
     1 0
이렇게 만들어야해


*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (A) {
    let aLand = [];
    let bLand = [];
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[0].length; j++) {
            if (A[i][j] === 1) {
                if (!aLand.length) {
                    dfs(A, i, j, aLand);
                } else if (!bLand.length) {
                    dfs(A, i, j, bLand);
                }
            }
        }
    }
    let diff =
        aLand.length > bLand.length
            ? calculateDistance(bLand, aLand)
            : calculateDistance(aLand, bLand);
    return diff;
};
function dfs(A, i, j, res) {
    if (i < 0 || j < 0 || i >= A.length || j >= A.length || A[i][j] !== 1)
        return;
    A[i][j] = 0;
    res.push([i, j]);
    dfs(A, i - 1, j, res);
    dfs(A, i + 1, j, res);
    dfs(A, i, j - 1, res);
    dfs(A, i, j + 1, res);
}
function calculateDistance(aDistance, bDistance) {
    let min = Infinity;
    // length 더 작은 애가 바깥쪽 for문에 있어
    for (let i = 0; i < aDistance.length; i++) {
        for (let j = 0; j < bDistance.length; j++) {
            let calculateDiff =
                Math.abs(aDistance[i][0] - bDistance[j][0]) +
                Math.abs(aDistance[i][1] - bDistance[j][1]) -
                1;
            min = Math.min(calculateDiff, min);
        }
    }
    return min;
}
