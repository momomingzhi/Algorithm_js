/**
 * /*
 * Given the root of a binary tree, return the sum of all left leaves.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 24
 * Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
 * Example 2:
 *
 * Input: root = [1]
 * Output: 0
 *
 * @format
 */

// 맨 마지막 left 노드만 더해야해
// 내코드
var sumOfLeftLeaves = function (root) {
    let sum = 0;
    const dfs = (root) => {
        if (!root) return 0;
        if (!root.left && !root.right) return `left_${root.val}`;
        let left = dfs(root.left);
        let right = dfs(root.right);
        if (left.length && left.includes('left')) {
            sum += parseInt(left.split('_')[1]);
        }
        return `root.val`;
    };
    dfs(root);
    //console.log('sum: ',sum)
    return sum;
};
const sumOfLeftLeaves = (x, isLeft) => {
    if (!x) return 0;
    if (!x.left && !x.right && isLeft) return x.val;

    return sumOfLeftLeaves(x.left, true) + sumOfLeftLeaves(x.right, false);
};
