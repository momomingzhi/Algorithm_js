/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

Input: s = "hello"
Output: "holle"

Input: s = "leetcode"
Output: "leotcede"
*/
var reverseVowels = function (s) {
  let left = 0;
  let right = s.length - 1;
  const VOWELS = { a: 1, e: 1, i: 1, o: 1, u: 1, A: 1, E: 1, I: 1, O: 1, U: 1 };
  let arr = s.split("");
  while (left < right) {
    if (VOWELS[arr[left]]) {
      if (VOWELS[arr[right]]) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        right--;
        left++;
      } else {
        //console.log('오른쪽만 모음일때',s[left],s[right])
        right--;
      }
    } else {
      //console.log('왼쪽만 모음일때',s[left],s[right])
      left++;
    }
  }
  return arr.join("");
};
