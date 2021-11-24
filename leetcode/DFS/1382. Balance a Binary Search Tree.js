/**
 * /*
 * Given the root of a binary search tree, return a balanced binary search tree with the same node values. If there is more than one answer, return any of them.
 *
 * A binary search tree is balanced if the depth of the two subtrees of every node never differs by more than 1.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,null,2,null,3,null,4,null,null]
 * Output: [2,1,3,null,null,null,4]
 * Explanation: This is not the only correct answer, [3,1,4,null,2] is also correct.
 * Example 2:
 *
 *
 * Input: root = [2,1,3]
 * Output: [2,1,3]
 *
 * @format
 */

// 처음 노드 개수를 어떻게 알아낼까... 해서 left, right 둘다 비교해서 더 큰걸로 하려 했는데 효율적이지 못했음...
// 이분 검색을 해야한다는것까진 생각했는데 새로운 노드를 그려서 할지 기존꺼에서 바꿀지 고민..
// input: [1,null,2,null,3,null,4]
var balanceBST = function (root) {
    let arr = [];
    let go = (root) => {
        if (root.left) go(root.left);
        arr.push(root.val);
        if (root.right) go(root.right);
    };
    go(root);
    /*
    arr: [ 1, 2, 3, 4 ]
    */
    let bal = (root = null, i = 0, j = arr.length - 1) => {
        let k = Math.floor((i + j) / 2);
        root = new TreeNode(arr[k]);
        root.left = i < k ? bal(root, i, k - 1) : null;
        root.right = k < j ? bal(root, k + 1, j) : null;
        return root;
    };
    return bal();
};
