/**
 * /*
 * Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
 *
 * Note that the same word in the dictionary may be reused multiple times in the segmentation.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "leetcode", wordDict = ["leet","code"]
 * Output: true
 * Explanation: Return true because "leetcode" can be segmented as "leet code".
 * Example 2:
 *
 * Input: s = "applepenapple", wordDict = ["apple","pen"]
 * Output: true
 * Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
 * Note that you are allowed to reuse a dictionary word.
 * Example 3:
 *
 * Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
 * Output: false
 *
 * @format
 */

//s 문자열에 있는 단어가 array에 있는지 확인하는 문제
// 나머지 케이스는 다 맞췄는데 'aaaaa' 'aaa' s = 'aaaaaaaa' 일때
// 먼저 나오는 aaa로 되는 바람에 실패..
// 내코드
var wordBreak = function (s, wordDict) {
    let map = new Map();
    for (let i = 0; i < wordDict.length; i++) {
        map.set(wordDict[i], wordDict[i]);
    }
    let str = '';
    for (let i = 0; i < s.length; i++) {
        str += s[i];
        if (map.get(str)) {
            str = '';
        }
    }
    console.log(str.length);
    if (!str.length) return true;
    else return false;
};
/*
인풋으로
"applepenapple"
["apple","pen"]
넣었을때
Set(2) { 'apple', 'pen' } Set(2) { 5, 3 }
starts: Set(1) { 0 }
starts: Set(2) { 0, 5 }
starts: Set(3) { 0, 5, 8 }
starts: Set(4) { 0, 5, 8, 13 }


*/ var wordBreak = function (s, wordDict) {
    const words = new Set(wordDict);
    const wordLens = new Set(wordDict.map((word) => word.length));
    const starts = new Set([0]);
    console.log(words, wordLens);
    for (let start of starts) {
        console.log('starts:', starts);
        for (let len of wordLens) {
            if (words.has(s.slice(start, start + len))) {
                starts.add(start + len);
            }
        }
    }
    return starts.has(s.length);
};
