/**
 * /*
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
 *
 * Notice that you may not slant the container.
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
 *
 * @format
 */

//나도 비슷하게 풀었는데 난 for문안에서 while문 돌려서 time limited 나옴
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
    let result = 0,
        left = 0,
        right = height.length - 1;
    while (left < right) {
        let small = Math.min(height[left], height[right]);
        let area = (right - left) * small;
        if (area > result) result = area;
        if (height[left] < height[right]) left++;
        else right--;
    }
    return result;
};
