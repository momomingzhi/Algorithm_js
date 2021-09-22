/**
 * /*
 * Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.
 * Input: root = [5,3,6,2,4,null,7], k = 9
 * Output: true
 * Input: root = [5,3,6,2,4,null,7], k = 28
 * Output: false
 * Input: root = [2,1,3], k = 4
 * Output: true
 * Input: root = [2,1,3], k = 1
 * Output: false
 *
 * @format
 */

var findTarget = function (root, k) {
    const map = new Set();

    function dfs(node) {
        if (!node) return false;
        if (map.has(k - node.val)) {
            return true;
        }
        map.add(node.val);
        return dfs(node.left) || dfs(node.right);
    }
    return dfs(root);
};
var findTarget = function (root, k) {
    if (!root) return false;
    const set = new Set();
    const stack = [root];
    while (stack.length) {
        const node = stack.pop();
        if (set.has(k - node.val)) return true;
        set.add(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return false;
};
