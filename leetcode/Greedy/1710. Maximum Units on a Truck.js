/**
 * /*
 * You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:
 *
 * numberOfBoxesi is the number of boxes of type i.
 * numberOfUnitsPerBoxi is the number of units in each box of the type i.
 * You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.
 *
 * Return the maximum total number of units that can be put on the truck.
 *
 *
 *
 * Example 1:
 *
 * Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
 * Output: 8
 * Explanation: There are:
 * - 1 box of the first type that contains 3 units.
 * - 2 boxes of the second type that contain 2 units each.
 * - 3 boxes of the third type that contain 1 unit each.
 * You can take all the boxes of the first and second types, and one box of the third type.
 * The total number of units will be = (1 * 3) + (2 * 2) + (1 * 1) = 8.
 * Example 2:
 *
 * Input: boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10
 * Output: 91
 *
 * @format
 */

// 문제 이해를 제대로 못함..
// 유닛 박스가 제일 많은 박스부터 올려야해 그렇게해서 박스의 최대 수 맞추기
// 1. 트럭에 가장 많이 실어올리기 위해선 유닛이 가장 많은 박스를 올리는 것이 유리하다.
// 2. 정렬을 이용해 유닛 순으로, 오름차순으로 정렬한다.
// 3. 트럭에 실은 박스의 개수가 TruckSize가 넘기 전까지 박스 X 유닛의 값을 더해준다.

var maximumUnits = function (boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    console.log(boxTypes);
    let ans = 0;
    for (let i = 0; truckSize && i < boxTypes.length; i++) {
        let count = Math.min(boxTypes[i][0], truckSize);
        ans += count * boxTypes[i][1];
        truckSize -= count;
    }
    return ans;
};
