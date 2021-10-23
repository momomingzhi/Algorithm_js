/*
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3:

Input: candidates = [2], target = 1
Output: []
Example 4:

Input: candidates = [1], target = 1
Output: [[1]]
Example 5:

Input: candidates = [1], target = 2
Output: [[1,1]]
*/
// 내코드 -> 실패!
// 일단 tmp의 array 배열 크기를 어떻게 해야할지 고민이 커서 걍 10으로 넣었음 -> 그렇다면 이렇게 푸는게 아니였겠지..
// array에서 backtracking하는 방법을 array.pop()으로 생각하지 못함
var combinationSum = function (candidates, target) {
  let res = [];
  let n = candidates.length;
  let sum = 0;
  let tmp = Array.from({ length: 10 }, () => 0);
  const dfs = (L, idx, sum) => {
    let minus = target - sum;
    if (idx === n) return;
    if (candidates.indexOf(minus)) {
      if (minus === 0) {
        console.log("tmp:", tmp);
        res.push(tmp.slice());

        return;
      }
      for (let i = 0; i < n; i++) {
        tmp[L] = candidates[i];
        dfs(L + 1, idx + 1, sum + candidates[i]);
        tmp.pop();
      }
    } else {
      return;
    }
  };
  for (let i = 0; i < n; i++) {
    tmp[0] = candidates[i];
    sum += tmp[0];
    dfs(1, i, sum);
  }
};
//정답
function combinationSum(candidates, target) {
  var buffer = [];
  var result = [];
  search(0, target);
  return result;

  function search(startIdx, target) {
    if (target === 0) return result.push(buffer.slice());
    if (target < 0) return;
    if (startIdx === candidates.length) return;
    buffer.push(candidates[startIdx]);
    search(startIdx, target - candidates[startIdx]);
    buffer.pop();
    search(startIdx + 1, target);
  }
}
