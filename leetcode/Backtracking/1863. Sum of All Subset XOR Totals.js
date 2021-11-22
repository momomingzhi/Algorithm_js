/*

The XOR total of an array is defined as the bitwise XOR of all its elements, or 0 if the array is empty.

For example, the XOR total of the array [2,5,6] is 2 XOR 5 XOR 6 = 1.
Given an array nums, return the sum of all XOR totals for every subset of nums. 

Note: Subsets with the same elements should be counted multiple times.

An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b.

 

Example 1:

Input: nums = [1,3]
Output: 6
Explanation: The 4 subsets of [1,3] are:
- The empty subset has an XOR total of 0.
- [1] has an XOR total of 1.
- [3] has an XOR total of 3.
- [1,3] has an XOR total of 1 XOR 3 = 2.
0 + 1 + 3 + 2 = 6
Example 2:

Input: nums = [5,1,6]
Output: 28
Explanation: The 8 subsets of [5,1,6] are:
- The empty subset has an XOR total of 0.
- [5] has an XOR total of 5.
- [1] has an XOR total of 1.
- [6] has an XOR total of 6.
- [5,1] has an XOR total of 5 XOR 1 = 4.
- [5,6] has an XOR total of 5 XOR 6 = 3.
- [1,6] has an XOR total of 1 XOR 6 = 7.
- [5,1,6] has an XOR total of 5 XOR 1 XOR 6 = 2.
0 + 5 + 1 + 6 + 4 + 3 + 7 + 2 = 28
Example 3:

Input: nums = [3,4,5,6,7,8]
Output: 480
Explanation: The sum of all XOR totals for every subset is 480.
*/

// OR 연산자를 몰랐다...거기서부터 코드가 길어짐..
//input : [1,3]
var subsetXORSum = function (nums) {
  let n = nums.length;
  const arr = [];
  dfs([], 0);
  function dfs(path, idx) {
    arr.push(path);
    for (let i = idx; i < n; i++) {
      dfs([...path, nums[i]], i + 1);
    }
  }
  console.log(arr);
  bit(5);
  function bit(num) {
    let str = "";
    while (num) {
      str += num % 2;
      num = parseInt(num / 2);
      console.log("str:", str, num);
    }
    console.log(parseInt(str, 2));
    return str;
  }
};
// 최적화1
var subsetXORSum = function (nums) {
  let bitOR = 0;
  for (let i = 0; i < nums.length; ++i) {
    bitOR |= nums[i];
  }
  /*
     7 Bitwise OR assignment
     01
     11
     ----
     11 => 7
    */
  return bitOR * Math.pow(2, nums.length - 1);
};

var subsetXORSum = function (nums) {
  const subsets = [[]];
  let sum = 0;
  for (const el of nums) {
    const last = subsets.length - 1;
    for (let i = 0; i <= last; i++) {
      subsets.push([...subsets[i], el]);
    }
  }
  /*
    [ [], [ 1 ], [ 3 ], [ 1, 3 ] ]
    */
  for (let j = 0; j < subsets.length; j++) {
    if (subsets[j].length === 0) sum = sum + 0;
    else if (subsets[j].length === 1) sum = sum + parseInt(subsets[j]);
    else sum = sum + parseInt(subsets[j].reduce((acc, curr) => acc ^ curr));
  }
  return sum;
};
