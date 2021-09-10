/**
 * /*
 * Write an algorithm to determine if a number n is happy.
 *
 * A happy number is a number defined by the following process:
 *
 * Starting with any positive integer, replace the number by the sum of the squares of its digits.
 * Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
 * Those numbers for which this process ends in 1 are happy.
 * Return true if n is a happy number, and false if not.
 *
 * Input: n = 19
 * Output: true
 * Explanation:
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 *
 * Input: n = 2
 * Output: false
 *
 * @format
 */

//내풀이
//계속 돈다는건 중복되는 애들이 나온다는 것이기 때문에
//나도 조취처리해주려고 했는데 seen = {} 이건 생각 못함..
var isHappy = function (n) {
    let cnt = 0;
    while (true) {
        let splited = n
            .toString()
            .split('')
            .reduce((a, b) => a + Number(b) * Number(b), 0);
        if (splited === 1) return true;
        n = splited;
        cnt++;
        if (cnt >= 1024) return false;
    }
    return false;
};
//좋은 풀이
var isHappy = function (n) {
    var seen = {};
    while (n !== 1 && !seen[n]) {
        seen[n] = true;
        n = sumOfSquares(n);
    }
    return n === 1 ? true : false;
};

function sumOfSquares(numString) {
    return numString
        .toString()
        .split('')
        .reduce(function (sum, num) {
            return sum + Math.pow(num, 2);
        }, 0);
}
