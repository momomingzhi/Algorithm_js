/*
Given the root node of a binary search tree and two integers low and high,
 return the sum of values of all nodes with a value in the inclusive range [low, high].
Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.
Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
Output: 23
Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.
생각은 다 했는데 구현 실패..
*/
var rangeSumBST = function (root, L, R) {
  var sum = 0;
  if (root == null) {
    return sum;
  }

  if (root.val > L) {
    sum += rangeSumBST(root.left, L, R);
  }
  if (root.val <= R && root.val >= L) {
    sum += root.val;
  }
  if (root.val < R) {
    sum += rangeSumBST(root.right, L, R);
  }

  return sum;
};
