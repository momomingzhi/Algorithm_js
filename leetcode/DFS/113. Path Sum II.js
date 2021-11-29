/**
 * /*
 * Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.
 *
 * A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * Output: [[5,4,11,2],[5,8,4,5]]
 * Explanation: There are two paths whose sum equals targetSum:
 * 5 + 4 + 11 + 2 = 22
 * 5 + 8 + 4 + 5 = 22
 * Example 2:
 *
 *
 * Input: root = [1,2,3], targetSum = 5
 * Output: []
 * Example 3:
 *
 * Input: root = [1,2], targetSum = 0
 * Output: []
 *
 * @format
 */

var pathSum = function (root, targetSum) {
    let res = [];
    function dfs(root, targetSum, path) {
        if (!root) return 0;
        targetSum -= root.val;
        path = [...path, root.val];
        if (!root.left && !root.right && targetSum === 0) {
            res.push(path.slice());
        }
        return (
            dfs(root.left, targetSum, path) || dfs(root.right, targetSum, path)
        );
    }
    dfs(root, targetSum, []);
    return res;
};

var pathSum = function (root, sum, res = [], path = []) {
    if (root) {
        path.push(root.val);
        if (!root.left && !root.right && sum - root.val === 0)
            res.push([...path]);
        pathSum(root.left, sum - root.val, res, path);
        pathSum(root.right, sum - root.val, res, path);
        path.pop();
    }
    return res;
};
