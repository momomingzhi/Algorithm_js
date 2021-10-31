/*
Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
*/
// 부분 집합 문제
function subsets(nums) {
  const powerset = [];
  generatePowerset([], 0);

  function generatePowerset(path, index) {
    console.log("first path:", path);
    powerset.push(path);
    for (let i = index; i < nums.length; i++) {
      console.log("original path: ", path, "path:", [...path, nums[i]]);
      generatePowerset([...path, nums[i]], i + 1);
    }
  }

  return powerset;
}
