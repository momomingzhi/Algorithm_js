/**
 * /*
 * Given two version numbers, version1 and version2, compare them.
 *
 * Version numbers consist of one or more revisions joined by a dot '.'. Each revision consists of digits and may contain leading zeros. Every revision contains at least one character. Revisions are 0-indexed from left to right, with the leftmost revision being revision 0, the next revision being revision 1, and so on. For example 2.5.33 and 0.1 are valid version numbers.
 *
 * To compare version numbers, compare their revisions in left-to-right order. Revisions are compared using their integer value ignoring any leading zeros. This means that revisions 1 and 001 are considered equal. If a version number does not specify a revision at an index, then treat the revision as 0. For example, version 1.0 is less than version 1.1 because their revision 0s are the same, but their revision 1s are 0 and 1 respectively, and 0 < 1.
 *
 * Return the following:
 *
 * If version1 < version2, return -1.
 * If version1 > version2, return 1.
 * Otherwise, return 0.
 * Input: version1 = "1.01", version2 = "1.001"
 * Output: 0
 * Explanation: Ignoring leading zeroes, both "01" and "001" represent the same integer "1".
 * Input: version1 = "0.1", version2 = "1.1"
 * Output: -1
 * Explanation: version1's revision 0 is "0", while version2's revision 0 is "1". 0 < 1, so version1 < version2.
 * Input: version1 = "1.0.1", version2 = "1"
 * Output: 1
 *
 * 1.0.1 < 1.10 임
 *
 * 앞에 있는 0은 지우고 뒤에 있는 0은 남기고 돌리려고 하니까 1.1 1.0000001 이랑 비교했을때 제대로 안됨
 * ex) 1.000001 하면 [1,1] 이렇게 나오게..
 *
 * @format
 */

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    var v1Array = version1.split('.');
    var v2Array = version2.split('.');
    var length = Math.max(v1Array.length, v2Array.length);

    for (var i = 0; i < length; i++) {
        var num1 = parseInt(v1Array[i]) || 0;
        var num2 = parseInt(v2Array[i]) || 0;
        console.log(num1, num2);
        if (num1 == num2) {
            continue;
        }

        return num1 > num2 ? 1 : -1;
    }

    return 0;
};
