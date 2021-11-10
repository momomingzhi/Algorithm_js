/**
 * /*
 * Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
 * Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
 * Example 2:
 *
 *
 * Input: root = [5,1,7]
 * Output: [1,null,5,null,7]
 *
 * @format
 */

// binary tree paths와 정반대 문제 binary tree path는 위에서부터면
// 이 문제는 아래에서부터~
var increasingBST = function (root) {
    let newTree = new TreeNode();
    let tmp = newTree;
    const dfs = (root) => {
        if (!root) return;
        //가장 왼쪽 아래까지 가고
        if (root.left) dfs(root.left);
        // 거기의 root.val을 tmp.right에 넣어줘
        // 밑으로 새로운 노드를 만들어 가는 거라 새로운 node 만들어주면서 root.val 넣어주기
        tmp.right = new TreeNode(root.val);
        tmp = tmp.right;

        if (root.right) dfs(root.right);
    };
    dfs(root);
    return newTree.right;
};
