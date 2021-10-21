/**
 * /*
 * A company has n employees with a unique ID for each employee from 0 to n - 1. The head of the company is the one with headID.
 *
 * Each employee has one direct manager given in the manager array where manager[i] is the direct manager of the i-th employee, manager[headID] = -1. Also, it is guaranteed that the subordination relationships have a tree structure.
 *
 * The head of the company wants to inform all the company employees of an urgent piece of news. He will inform his direct subordinates, and they will inform their subordinates, and so on until all employees know about the urgent news.
 *
 * The i-th employee needs informTime[i] minutes to inform all of his direct subordinates (i.e., After informTime[i] minutes, all his direct subordinates can start spreading the news).
 *
 * Return the number of minutes needed to inform all the employees about the urgent news.
 *
 *
 *
 * Example 1:
 *
 * Input: n = 1, headID = 0, manager = [-1], informTime = [0]
 * Output: 0
 * Explanation: The head of the company is the only employee in the company.
 * Example 2:
 *
 *
 * Input: n = 6, headID = 2, manager = [2,2,-1,2,2,2], informTime = [0,0,1,0,0,0]
 * Output: 1
 * Explanation: The head of the company with id = 2 is the direct manager of all the employees in the company and needs 1 minute to inform them all.
 * The tree structure of the employees in the company is shown.
 * Example 3:
 *
 *
 * Input: n = 7, headID = 6, manager = [1,2,3,4,5,6,-1], informTime = [0,6,5,4,3,2,1]
 * Output: 21
 * Explanation: The head has id = 6. He will inform employee with id = 5 in 1 minute.
 * The employee with id = 5 will inform the employee with id = 4 in 2 minutes.
 * The employee with id = 4 will inform the employee with id = 3 in 3 minutes.
 * The employee with id = 3 will inform the employee with id = 2 in 4 minutes.
 * The employee with id = 2 will inform the employee with id = 1 in 5 minutes.
 * The employee with id = 1 will inform the employee with id = 0 in 6 minutes.
 * Needed time = 1 + 2 + 3 + 4 + 5 + 6 = 21.
 * Example 4:
 *
 * Input: n = 15, headID = 0, manager = [-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6], informTime = [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0]
 * Output: 3
 * Explanation: The first minute the head will inform employees 1 and 2.
 * The second minute they will inform employees 3, 4, 5 and 6.
 * The third minute they will inform the rest of employees.
 * Example 5:
 *
 * @format
 */

// 같은 레벨일 경우 어케 처리해야할지 신중히..
/*
var evenGen = (length) => Array.from({length}, (value, index) => index*2);
value값 자체는 없기때문에 index 사용하여 배열 생성해야함

근데 왜 Math.max로 했을까..
*/
function numOfMinutes(n, headID, manager, informTime) {
    const employeesMap = new Map(Array.from(manager, (_, i) => [i, []]));
    for (const [i, head] of manager.entries()) {
        if (head !== -1) {
            employeesMap.get(head).push(i);
        }
    }
    // employeesMap 은
    /*
    Map(15) {
        0 => [ 1, 2 ],
        1 => [ 3, 4 ],
        2 => [ 5, 6 ],
        3 => [ 7, 8 ],
        4 => [ 9, 10 ],
        5 => [ 11, 12 ],
        6 => [ 13, 14 ],
        7 => [],
        8 => [],
        9 => [],
        10 => [],
        11 => [],
        12 => [],
        13 => [],
        14 => []
     }
    */
    return dfs(headID);

    function dfs(head) {
        const cnt =
            Math.max(0, ...employeesMap.get(head).map(dfs)) + informTime[head];
        console.log('cnt: ', cnt, head, informTime[head]);
        return cnt;
    }
}
/*
    트리 구조가 


            0
       1          2
     3   4     5     6
    7 8 9 10 11 12 13 14
    이렇게 되어있어서 7 -> 8 -> 3 -> 4 -> 1 이런 순으로...
    cnt:  0 7 0
    cnt:  0 8 0
    cnt:  1 3 1
    cnt:  0 9 0
    cnt:  0 10 0
    cnt:  1 4 1
    cnt:  2 1 1
    cnt:  0 11 0
    cnt:  0 12 0
    cnt:  1 5 1
    cnt:  0 13 0
    cnt:  0 14 0
    cnt:  1 6 1
    cnt:  2 2 1
    cnt:  3 0 1
  
  */
