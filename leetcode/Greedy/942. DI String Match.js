/**
 * /*
 * A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:
 *
 * s[i] == 'I' if perm[i] < perm[i + 1], and
 * s[i] == 'D' if perm[i] > perm[i + 1].
 * Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "IDID"
 * Output: [0,4,1,3,2]
 * Example 2:
 *
 * Input: s = "III"
 * Output: [0,1,2,3]
 * Example 3:
 *
 * Input: s = "DDI"
 * Output: [3,2,0,1]
 *
 * @format
 */

//I 일땐 오름차순 D 일땐 내림차순
/*
"IDID"로 예시를 들면
I일때 0,4 (오름차순)
D일때 4,1 (내림차순)
I일때 1,3 (오름차순)
D일때 3,2 (내림차순)
*/
// 너무 복잡하게 생각했다..
// 위의 예시가 0,2,1,4,3,도 되니까..
// 일단 배열에 숫자 집어넣고 바꿔주는 방식으로 하려했음

var diStringMatch = function (s) {
    let arr = s.split('');

    let res = [];
    let tmp = Array.from({ length: arr.length + 1 }, (_, idx) => idx);
    console.log(arr, tmp);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'I') {
            if (!res.length) {
                res.push(tmp[i]);
            }
        } else {
            if (!res.length) {
                res.push(tmp[arr.length - 1]);
            }
        }
    }
};
// 답
var diStringMatch = function (s) {
    let num = [];
    let inc = 0;
    let dec = s.length;
    let i = 0;
    while (num.length !== s.length + 1) {
        num[i] = s[i] === 'D' ? dec-- : inc++;
        i++;
    }
    console.log(num);
    return num;
};
