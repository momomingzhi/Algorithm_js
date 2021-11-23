/*
Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

 

Example 1:

Input: nums = [1,4,3,2]
Output: 4
Explanation: All possible pairings (ignoring the ordering of elements) are:
1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
So the maximum possible sum is 4.
Example 2:

Input: nums = [6,2,6,5,1,2]
Output: 9
Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.
*/

// 내 코드
// 이렇게 2개씩 해서 min 찾고 더하려 했는데
// 경우의 수가 너무 많았다..

var arrayPairSum = function (nums) {
  let visited = Array.from({ length: nums.length }, () => 0);
  let arr = Array.from({ length: nums.length }, () => 0);
  let res = [];
  dfs(0);
  console.log(res);
  function dfs(idx) {
    if (idx === nums.length) {
      res.push(arr.slice());
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (!visited[i]) {
          visited[i] = 1;
          arr[idx] = nums[i];
          dfs(idx + 1);
          visited[i] = 0;
        }
      }
    }
  }
};

// 최적화 코드
var arrayPairSum = function (nums) {
  // sort and sum up the minimum of the pairs
  console.log(nums.sort());
  /*
    
    [ 1, 2, 2, 5, 6, 6 ]

    */
  return nums
    .sort((a, b) => a - b)
    .reduce((sum, cur, i) => (i % 2 === 0 ? (sum += cur) : sum), 0);
};
