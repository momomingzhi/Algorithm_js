/**
 * /*
 * Given the root of a binary tree, construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way, and return it.
 *
 * Omit all the empty parenthesis pairs that do not affect the one-to-one mapping relationship between the string and the original binary tree.
 *
 *
 * Input: root = [1,2,3,4]
 * Output: "1(2(4))(3)"
 * Explanation: Originallay it needs to be "1(2(4)())(3()())", but you need to omit all the unnecessary empty parenthesis pairs. And it will
 * Input: root = [1,2,3,null,4]
 * Output: "1(2()(4))(3)"
 * Explanation: Almost the same as the first example, except we cannot omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.
 *
 * @format
 */

var tree2str = function (root) {
    let string = '';
    function dfs(node) {
        if (node === null) {
            return;
        }
        console.log('node', node.val);
        string += `(${node.val}`;
        if (!node.left && node.right) {
            string += `()`;
        }
        dfs(node.left) || dfs(node.right);
        string += ')';
    }
    dfs(root);
    let str = string.substr(1, string.length - 2);
    return str;
};
