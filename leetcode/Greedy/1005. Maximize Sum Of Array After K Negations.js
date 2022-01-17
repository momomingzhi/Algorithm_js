/*
Given an integer array nums and an integer k, modify the array in the following way:

choose an index i and replace nums[i] with -nums[i].
You should apply this process exactly k times. You may choose the same index i multiple times.

Return the largest possible sum of the array after modifying it in this way.



Example 1:

Input: nums = [4,2,3], k = 1
Output: 5
Explanation: Choose index 1 and nums becomes [4,-2,3].
Example 2:

Input: nums = [3,-1,0,2], k = 3
Output: 6
Explanation: Choose indices (1, 2, 2) and nums becomes [3,1,0,2].
Example 3:

Input: nums = [2,-3,-1,5,-4], k = 2
Output: 13
Explanation: Choose indices (1, 4) and nums becomes [2,3,-1,5,4].

* */
// 아이디어는 똑같이 생각했는데 nums.sort()를 할때 그 값에 마이너스가 있으면 제대로 sort가 안됐다
// 지금처럼 가장 작은 값을 쓰는 방법을 사용했었어야했음
var largestSumAfterKNegations = function(nums, k) {

    for(let i=0;i<k;i++){
        let value = Math.min(...nums);
        let minIdx = nums.indexOf(value);
        nums[minIdx] = -nums[minIdx]
    }
    return nums.reduce((a,b)=> a+b);



};
