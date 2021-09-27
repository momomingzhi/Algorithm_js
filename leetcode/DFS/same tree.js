/**
 * /*
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 *
 * Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 *
 * Input: p = [1,2,3], q = [1,2,3]
 * Output: true
 *
 * Input: p = [1,2], q = [1,null,2]
 * Output: false
 *
 * Input: p = [1,2,1], q = [1,1,2]
 * Output: false
 *
 * @format
 */

//내코드
var isSameTree = function (p, q) {
    let arr1 = [];
    let arr2 = [];
    const dfs = (node, arr) => {
        if (!node) {
            arr.push(null);
            return;
        }
        arr.push(node.val);
        dfs(node.left, arr);
        dfs(node.right, arr);
    };
    dfs(p, arr1);
    dfs(q, arr2);
    if (JSON.stringify(arr1) == JSON.stringify(arr2)) return true;
    else return false;
};
//효율적인 코드
function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.value !== q.value) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
