/**
 * /*
 * Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
 *
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "abccccdd"
 * Output: 7
 * Explanation:
 * One longest palindrome that can be built is "dccaccd", whose length is 7.
 * Example 2:
 *
 * Input: s = "a"
 * Output: 1
 * Example 3:
 *
 * Input: s = "bb"
 * Output: 2
 *
 * @format
 */

var longestPalindrome = function (s) {
    let map = {};
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
    }
    for (let key in map) {
        if (map[key] % 2 === 0) sum += map[key];
    }
    let max = 0;
    for (let idx in map) {
        if (map[idx] % 2 === 1) {
            max = Math.max(max, sum + map[idx]);
        }
    }
    return max || sum;
};

var longestPalindrome = function (s) {
    let ans = 0;
    let keys = {};
    for (let char of s) {
        keys[char] = (keys[char] || 0) + 1;
        /*
         keys
         { a: 1, b: 1, c: 4, d: 2 }
         */
        console.log('keys: ', keys);
        /*
         keys:  { a: 1 }
         keys:  { a: 1, b: 1 }
         keys:  { a: 1, b: 1, c: 1 }
         keys:  { a: 1, b: 1, c: 2 }
         keys:  { a: 1, b: 1, c: 3 }
         keys:  { a: 1, b: 1, c: 4 }
         keys:  { a: 1, b: 1, c: 4, d: 1 }
         keys:  { a: 1, b: 1, c: 4, d: 2 }
         */
        if (keys[char] % 2 === 0) ans += 2;
    }
    console.log(ans, s.length);
    return s.length > ans ? ans + 1 : ans;
    /*
        s.length가 8
        ans는 6
        
     */
};
