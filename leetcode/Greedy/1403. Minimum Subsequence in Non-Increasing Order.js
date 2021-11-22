/**
 * /*
 *
 * Input: nums = [4,3,10,9,8]
 * Output: [10,9]
 * Explanation: The subsequences [10,9] and [10,8] are minimal such that the sum of their elements is strictly greater than the sum of elements not included, however, the subsequence [10,9] has the maximum total sum of its elements.
 * Example 2:
 *
 * Input: nums = [4,4,7,6,7]
 * Output: [7,7,6]
 * Explanation: The subsequence [7,7] has the sum of its elements equal to 14 which is not strictly greater than the sum of elements not included (14 = 4 + 4 + 6). Therefore, the subsequence [7,6,7] is the minimal satisfying the conditions. Note the subsequence has to returned in non-decreasing order.
 *
 * @format
 */

// 되게 자주 나오는 유형?
// sort 먼저 하기
var minSubsequence = function (nums) {
    if (nums.length === 1) return nums;

    nums.sort((a, b) => b - a);
    let sum = 0;
    let total = nums.reduce((acc, cur) => {
        return (acc += cur);
    }, 0);
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum > total - sum) {
            //값보다 크면
            return nums.slice(0, i + 1);
        }
    }
};
