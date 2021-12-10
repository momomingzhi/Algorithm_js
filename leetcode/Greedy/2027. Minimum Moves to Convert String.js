/**
 * /*
 * You are given a string s consisting of n characters which are either 'X' or 'O'.
 *
 * A move is defined as selecting three consecutive characters of s and converting them to 'O'. Note that if a move is applied to the character 'O', it will stay the same.
 *
 * Return the minimum number of moves required so that all the characters of s are converted to 'O'.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "XXX"
 * Output: 1
 * Explanation: XXX -> OOO
 * We select all the 3 characters and convert them in one move.
 * Example 2:
 *
 * Input: s = "XXOX"
 * Output: 2
 * Explanation: XXOX -> OOOX -> OOOO
 * We select the first 3 characters in the first move, and convert them to 'O'.
 * Then we select the last 3 characters and convert them so that the final string contains all 'O's.
 * Example 3:
 *
 * Input: s = "OOOO"
 * Output: 0
 * Explanation: There are no 'X's in s to convert.
 *
 * @format
 */
// 문제 이해 제대로 못함
// 처음에 X 나온 index 부터 체크하면 됐음..
var minimumMoves = function (s) {
    let arr = s.split('');
    let cnt = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'X' || arr[i + 1] === 'X' || arr[i + 2] === 'X') {
            arr[i] = arr[i + 1] = arr[i + 2] = 'O';
            cnt++;
        }
    }
    console.log(cnt);
    return cnt;
};
var minimumMoves = function (s) {
    let moveIndex = (moves = 0);

    while (moveIndex < s.length) {
        const findIndex = s.indexOf('X', moveIndex);
        console.log('find', findIndex, s[findIndex]);
        if (findIndex > -1) {
            moveIndex = findIndex + 3;
            moves += 1;
        } else moveIndex = s.length;
    }

    return moves;
};
