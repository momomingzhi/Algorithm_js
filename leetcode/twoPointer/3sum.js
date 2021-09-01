/**
 * /*
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 *
 * @format
 */

var threeSum = function (nums) {
    let output = [];
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        const first = nums[i];
        if (first === nums[i - 1]) continue; //이전에 같은 값이 있으면 output에 같은 값이 들어가서
        let secondIdx = i + 1;
        let thirdIdx = nums.length - 1;
        const seen = {};
        while (secondIdx < thirdIdx) {
            const second = nums[secondIdx];
            const third = nums[thirdIdx];
            let sum = first + second + thirdIdx;
            if (sum === 0 && !seen[second] && !seen[third]) {
                output.push([first, second, third]);
                seen[second] = true;
                seen[third] = true;
            }
            if (sum <= 0) {
                secondIdx++;
            }
            if (sum >= 0) {
                thirdIdx--;
            }
        }
    }
    return output;
};
