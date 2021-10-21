/**
 * /*
 * Given an array of non-negative integers arr, you are initially positioned at start index of the array. When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach to any index with value 0.
 *
 * Notice that you can not jump outside of the array at any time.
 *
 *
 *
 * Example 1:
 *
 * Input: arr = [4,2,3,0,3,1,2], start = 5
 * Output: true
 * Explanation:
 * All possible ways to reach at index 3 with value 0 are:
 * index 5 -> index 4 -> index 1 -> index 3
 * index 5 -> index 6 -> index 4 -> index 1 -> index 3
 * Example 2:
 *
 * Input: arr = [4,2,3,0,3,1,2], start = 0
 * Output: true
 * Explanation:
 * One possible way to reach at index 3 with value 0 is:
 * index 0 -> index 4 -> index 1 -> index 3
 * Example 3:
 *
 * Input: arr = [3,0,2,1,2], start = 2
 * Output: false
 * Explanation: There is no way to reach at index 1 with value 0.
 *
 * @format
 */

// 쉬운 dfs 문제 계속 중복돼서 재귀 못 빠져올때 객체에 그 값 존재하는지 안하는지로 판단해서 재귀 끝내기
var canReach = function (arr, start) {
    let res = false;
    let seen = {};
    const solve = (idx) => {
        if (!seen[idx]) {
            seen[idx] = true;
            if (idx >= arr.length || idx < 0) return;
            if (arr[idx] === 0) {
                res = true;
                return;
            }
            solve(idx + arr[idx]);
            solve(idx - arr[idx]);
        }
    };
    solve(start);
    return res;
};
//
var canReach = function (arr, start) {
    function callDFS(idx) {
        if (arr[idx] === 'seen' || idx < 0 || idx >= arr.length) return false;
        if (!arr[idx]) return true;
        const move = arr[idx];
        arr[idx] = 'seen';
        return callDFS(idx - move) || callDFS(idx + move);
    }
    return callDFS(start);
};
