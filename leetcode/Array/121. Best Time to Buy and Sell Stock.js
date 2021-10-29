/**
 * /*
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 *
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 *
 *
 * Example 1:
 *
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 * Example 2:
 *
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transactions are done and the max profit = 0.
 *
 * @format
 */

// 쉬운 문제인데 for문 두번돌려서 time limited 걸림
var maxProfit = function (prices) {
    for (let i = 0; i < prices.length; i++) {
        for (let j = i; j < prices.length; j++) {
            if (prices[i] < prices[j]) {
                max = Math.max(max, prices[j] - prices[i]);
            }
        }
    }
};
// 두번째 짠 코드인데 이것도 time limited 걸림ㅠㅠ
var maxProfit = function (prices) {
    let res = 0;
    for (let i = 0; i < prices.length; i++) {
        let newArr = prices.slice(i + 1, prices.length);
        let max = 0;
        max = Math.max(max, ...newArr);
        if (prices[i] < max) {
            res = Math.max(res, max - prices[i]);
        }
    }
    return res;
};

// 좋은 코드
var maxProfit = function (prices) {
    let min = Number.MAX_SAFE_INTEGER;
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    return max;
};
