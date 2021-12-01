/**
 * /*
 * We have n chips, where the position of the ith chip is position[i].
 *
 * We need to move all the chips to the same position. In one step, we can change the position of the ith chip from position[i] to:
 *
 * position[i] + 2 or position[i] - 2 with cost = 0.
 * position[i] + 1 or position[i] - 1 with cost = 1.
 * Return the minimum cost needed to move all the chips to the same position.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: position = [1,2,3]
 * Output: 1
 * Explanation: First step: Move the chip at position 3 to position 1 with cost = 0.
 * Second step: Move the chip at position 2 to position 1 with cost = 1.
 * Total cost is 1.
 * Example 2:
 *
 *
 * Input: position = [2,2,2,3,3]
 * Output: 2
 * Explanation: We can move the two chips at position  3 to position 2. Each move has cost = 1. The total cost = 2.
 * Example 3:
 *
 * Input: position = [1,1000000000]
 * Output: 1
 *
 * @format
 */

// 이해 못함..
// 2의 배수가 아니면 odd에 +1 하고 2의 배수면 even에 +1 한다
// 좋은 코드
var minCostToMoveChips = function (position) {
    var odd = 0;
    var even = 0;
    position.map((x) => (x % 2 ? (odd += 1) : (even += 1)));
    console.log(odd, even);
    return Math.min(odd, even);
};
var minCostToMoveChips = function (chips) {
    return Math.min(
        ...chips.reduce(
            (acc, cur) => {
                cur % 2 ? acc[0]++ : acc[1]++;
                return acc;
            },
            [0, 0]
        )
    );
};
// 내가 짜다 틀린 코드
var minCostToMoveChips = function (position) {
    let max = Math.max(...position);
    let arr = Array.from({ length: max }, () => 0);

    for (let i = 0; i < position.length; i++) {
        arr[position[i] - 1] = !arr[position[i] - 1]
            ? 1
            : arr[position[i] - 1] + 1;
    }

    let maxValue = arr.reduce((acc, cur) => acc + cur);
    max = Math.max(...arr);
    let maxIdx = arr.indexOf(max);
    let cnt = 0;
    console.log(maxValue, max, maxIdx);
    // 이렇게 할 경우 +2, -2 했을때 배열에 값이 없으면 NaN 들어가서 제대로 된 값이 안나옴
    while (maxValue !== max) {
        if (arr[maxIdx - 2] !== 0) {
            arr[maxIdx] += arr[maxIdx - 2];
            arr[maxIdx - 2] = 0;
        } else if (arr[maxIdx + 2] !== 0) {
            arr[maxIdx] += arr[maxIdx + 2];
            arr[maxIdx + 2] = 0;
        } else if (arr[maxIdx - 1] !== 0) {
            arr[maxIdx] += arr[maxIdx - 1];
            arr[maxIdx - 1] = 0;
            cnt++;
        } else if (arr[maxIdx + 1] !== 0) {
            arr[maxIdx] += arr[maxIdx + 1];
            arr[maxIdx + 1] = 0;
            cnt++;
        }
        max = Math.max(...arr);
        console.log('max:', max, arr);
    }
    console.log('cnt:', cnt);
};
