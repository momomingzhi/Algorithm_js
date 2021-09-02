/**
 * /*
 * Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 *
 * @format
 */

var isPalindrome = function (s) {
    const strings = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversed = strings.split('').reverse().join('');
    if (strings === reversed) return true;
    else return false;
};
