/**
 * /*
 * Given an integer n, return all the numbers in the range [1, n] sorted in lexicographical order.
 *
 * You must write an algorithm that runs in O(n) time and uses O(1) extra space.
 *
 *
 *
 * Example 1:
 *
 * Input: n = 13
 * Output: [1,10,11,12,13,2,3,4,5,6,7,8,9]
 * Example 2:
 *
 * Input: n = 2
 * Output: [1,2]
 *
 * @format
 */

// 1,2,3,...10,11,12.. 있을때 사전순대로 1,10,11,12,2 이렇게 바꾸는 문제
// 처음부터 array에 [1,2,3,4...] 이렇게 선언한채로 하려고 해서 splice, slice 쓰려하니까 너무 복잡해짐...
// 그래도 dfs로 해야하고 어떻게 해야할지는 생각해냄..!
var lexicalOrder = function (n) {
    let result = [];
    function pushFromTo(start, end) {
        while (start <= end && start <= n) {
            result.push(start);
            pushFromTo(start * 10, start * 10 + 9);
            start++;
        }
    }
    pushFromTo(1, 9);
    return result;
};
