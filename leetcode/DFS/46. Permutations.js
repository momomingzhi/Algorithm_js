/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
*/
// 아주 기본적인 순열문제!!
var permute = function (nums) {
  let results = [];
  let n = nums.length;
  let ch = Array.from({ length: n }, () => 0);
  let tmp = Array.from({ length: n }, () => 0);
  const dfs = (L) => {
    if (L === n) {
      results.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = nums[i];
          dfs(L + 1);
          ch[i] = 0;
        }
      }
    }
  };
  dfs(0);
  console.log(results);
  return results;
};
