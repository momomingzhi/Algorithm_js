/*
Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it in the maximum amount of balanced strings.

Return the maximum amount of split balanced strings.

 

Example 1:

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
Example 2:

Input: s = "RLLLLRRRLR"
Output: 3
Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
Example 3:

Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".
Example 4:

Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'
*/
// 쉬운문제!
// 내코드
var balancedStringSplit = function (s) {
  let cnt = 0;
  let tmpCnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      tmpCnt++;
    } else {
      tmpCnt--;
    }
    if (!tmpCnt) {
      cnt++;
      tmpCnt = 0; //굳이 안해줘도 됨 이미 0이니까!
    }
  }
  console.log(cnt);
  return cnt;
};
//좋은 코드
var balancedStringSplit = function (s) {
  let matches = 0;
  let balance = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      balance -= 1;
    } else if (s[i] === "L") {
      balance += 1;
    }

    if (balance === 0) {
      matches += 1;
    }
  }

  return matches;
};
