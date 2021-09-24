/*
Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.

Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]
Input: root = [1]
Output: ["1"]
*/
var binaryTreePaths = function (root) {
  if (root === null) return [];
  else if (root.left === null && root.right === null) return [`${root.val}`];
  else {
    let left = binaryTreePaths(root.left).map((x) => {
      return root.val + "->" + x;
    });
    let right = binaryTreePaths(root.right).map((x) => root.val + "->" + x);
    //console.log('마지막: ',left,right,[...left,...right])
    return [...left, ...right];
  }
};
