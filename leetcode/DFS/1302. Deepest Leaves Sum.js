/**
 * /*
 * Given the root of a binary tree, return the sum of values of its deepest leaves.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
 * Output: 15
 * Example 2:
 *
 * Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
 * Output: 19
 *
 * @format
 */

// 처음에 map 으로 하니까 같은 key 값은 허용 안해줘서 array로 바꿈
var deepestLeavesSum = function (root) {
    let sum = 0;
    let maxLevel = 0;
    let arr = [];
    const dfs = (root, level) => {
        if (!root) return 0;
        if (!root.left && !root.right) {
            arr.push([level, root.val]);
        }
        maxLevel = Math.max(level, maxLevel);
        return dfs(root.left, level + 1) || dfs(root.right, level + 1);
    };
    dfs(root, maxLevel);
    for (let [level, val] of arr) {
        if (maxLevel === level) sum += val;
    }
    console.log(maxLevel, arr);
    return sum;
};
// 최적화 코드
// 같은 레벨일 때 값 더하기 이런식으로!!! 암기!!
var deepestLeavesSum = function (root) {
    let sums = [];
    const dfs = (node, lvl) => {
        console.log('sums:', sums.length, lvl);
        if (lvl === sums.length) sums[lvl] = node.val;
        else sums[lvl] += node.val;
        console.log(sums);
        /*
            sums: 0 0
            [ 1 ]
            sums: 1 1
            [ 1, 2 ]
            sums: 2 2
            [ 1, 2, 4 ]
            sums: 3 3
            [ 1, 2, 4, 7 ]
            sums: 4 2
            [ 1, 2, 9, 7 ]
            sums: 4 1
            [ 1, 5, 9, 7 ]
            sums: 4 2
            [ 1, 5, 15, 7 ]
            sums: 4 3
            [ 1, 5, 15, 15 ]
        */
        if (node.left) dfs(node.left, lvl + 1);
        if (node.right) dfs(node.right, lvl + 1);
    };
    dfs(root, 0);

    return sums[sums.length - 1];
};
