/** @format */

var threeSumCloset = function (nums, target) {
    nums = nums.sort((a, b) => a - b);
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === targt) {
                return sum;
            } else if (sum < target) {
                j++;
            } else if (sum > target) {
                k--;
            }
            arr.push(sum);
        }
    }
    let result = arr[0];
    let closet = Math.abs(target - arr[0]);
    for (let i = 0; i < nums.length; i++) {
        if (Math.abs(target - arr[i]) < closet) {
            closet = Math.abs(target - arr[i]);
            result = arr[i];
        }
    }
    return result;
};
