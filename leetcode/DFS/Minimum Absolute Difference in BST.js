/*
Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

Input: root = [4,2,6,1,3]
Output: 1

Input: root = [1,0,48,null,null,12,49]
Output: 1

*/
var getMinimumDifference = function (root) {
  let prev = Infinity;
  let totalMin = Infinity;

  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    totalMin = Math.min(totalMin, Math.abs(node.val - prev));
    prev = node.val;
    traverse(node.right);
  }
  traverse(root);
  return totalMin;
};
