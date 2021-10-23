/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]

*/
//내코드
var mapOfNumbers = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

var letterCombinations = function (digits) {
  let res = [];
  let tmp = Array.from({ length: digits.length }, () => 0);
  let digit = digits.split("");
  if (!digits.length) {
    return [];
  }
  const dfs = (idx) => {
    if (idx === digits.length) {
      res.push(tmp.join(""));
    } else {
      console.log(idx);
      for (let i = 0; i < mapOfNumbers[digit[idx]].length; i++) {
        tmp[idx] = mapOfNumbers[digit[idx]][i];
        dfs(idx + 1);
      }
    }
  };
  for (let i = 0; i < mapOfNumbers[digit[0]].length; i++) {
    tmp[0] = mapOfNumbers[digit[0]][i];
    dfs(1);
  }
  return res;
};
//최적화 코드
const letterCombinations = (digits) => {
  if (digits == null || digits.length === 0) return [];

  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const res = [];
  const go = (i, s) => {
    if (i === digits.length) {
      res.push(s);
      return;
    }

    for (const c of map[digits[i]]) {
      go(i + 1, s + c);
    }
  };

  go(0, "");
  return res;
};
