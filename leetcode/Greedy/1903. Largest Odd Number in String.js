/**
 * /*
 * You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.
 *
 * A substring is a contiguous sequence of characters within a string.
 *
 *
 *
 * Example 1:
 *
 * Input: num = "52"
 * Output: "5"
 * Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
 * Example 2:
 *
 * Input: num = "4206"
 * Output: ""
 * Explanation: There are no odd numbers in "4206".
 * Example 3:
 *
 * Input: num = "35427"
 * Output: "35427"
 * Explanation: "35427" is already an odd number.
 *
 * @format
 */
// 틀림..
// odd number란 홀수 그래서 맨 마지막의 숫자가 2의 배수인지 아닌지만 확인하면 되는것!
var largestOddNumber = function (num) {
    if (Number(num.slice(-1) % 2 !== 0)) return num;
    for (let i = num.length - 1; i > 0; i--) {
        if (parseInt(num[i - 1]) % 2 !== 0) {
            console.log(num, num[i - 1]);
            return num.substr(0, i);
        }
    }
    return '';
};
