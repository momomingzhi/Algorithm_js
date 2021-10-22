/**
 * /*
 * You are given an integer array nums of length n where nums is a permutation of the numbers in the range [0, n - 1].
 *
 * You should build a set s[k] = {nums[k], nums[nums[k]], nums[nums[nums[k]]], ... } subjected to the following rule:
 *
 * The first element in s[k] starts with the selection of the element nums[k] of index = k.
 * The next element in s[k] should be nums[nums[k]], and then nums[nums[nums[k]]], and so on.
 * We stop adding right before a duplicate element occurs in s[k].
 * Return the longest length of a set s[k].
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [5,4,0,3,1,6,2]
 * Output: 4
 * Explanation:
 * nums[0] = 5, nums[1] = 4, nums[2] = 0, nums[3] = 3, nums[4] = 1, nums[5] = 6, nums[6] = 2.
 * One of the longest sets s[k]:
 * s[0] = {nums[0], nums[5], nums[6], nums[2]} = {5, 6, 2, 0}
 * Example 2:
 *
 * Input: nums = [0,1,2]
 * Output: 1
 *
 * @format
 */

/*
문제 이해를 제대로 못함..
길이가 n인 정수 배열 nums가 주어진다. nums는 [0, n-1] 범위의 겹치지 않는 숫자의 수열이다.

s[k] = {nums[k], nums[nums[k]], nums[nums[nums[k]]] ...} 라 할 때, s[k]의 모든 요소들의 중복이 있지 않아야 한다.

만들 수 있는 s[k]의 최대 길이를 구하라.

nums={1,2,0,3} 이라면 s[k]가 될 수 있는 배열들은 {1,2,0} {3}이고 이들은 각각 사이클이 만들어진다
사이클이 만들어지는 s 배열을 만드는데 이 배열들 중 최장 길이를 구하는 문제
s 배열은 사이클이므로 어느 지점이든 시작 지점으로 잡아도 관계 없다


*/
// 내코드
var arrayNesting = function (nums) {
    let map = new Set();
    map.add(0);
    let flag = false;
    const dfs = (idx) => {
        if (idx === 0 && flag) return;
        flag = true;
        map.add(nums[idx]);
        dfs(nums[idx]);
    };
    dfs(0);
    console.log(map);
    return map.size;
};
var arrayNesting = function (nums) {
    let visited = new Set();
    const dfs = (num, len) => {
        if (visited.has(num)) return len;
        visited.add(num);
        len++;
        return dfs(nums[num], len);
    };
    return nums.reduce(
        (len, curr) => (visited.has(curr) ? len : Math.max(dfs(curr, 0), len)),
        0
    );
};
