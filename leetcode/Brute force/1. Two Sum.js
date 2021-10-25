/**
 * /*
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Output: Because nums[0] + nums[1] == 9, we return [0, 1].
 * Example 2:
 *
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * Example 3:
 *
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *
 * @format
 */

// 내코드
var twoSum = function (nums, target) {
    let res = [];
    let seen = {};
    for (let i = 0; i < nums.length; i++) {
        let targetIndx = nums.indexOf(target - nums[i]);
        if (targetIndx !== -1 && !seen[i] && i !== targetIndx) {
            res.push(i);
            res.push(targetIndx);
            seen[i] = true;
            seen[targetIndx] = true;
        }
    }
    console.log(res);
    return res;
};

var twoSum = function (nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return [];
};
