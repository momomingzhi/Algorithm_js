/*
You have a data structure of employee information, which includes the employee's unique id, their importance value, and their direct subordinates' id.

You are given an array of employees employees where:

employees[i].id is the ID of the ith employee.
employees[i].importance is the importance value of the ith employee.
employees[i].subordinates is a list of the IDs of the subordinates of the ith employee.
Given an integer id that represents the ID of an employee, return the total importance value of this employee and all their subordinates.

Input: employees = [[1,5,[2,3]],[2,3,[]],[3,3,[]]], id = 1
Output: 11
Explanation: Employee 1 has importance value 5, and he has two direct subordinates: employee 2 and employee 3.
They both have importance value 3.
So the total importance value of employee 1 is 5 + 3 + 3 = 11.

Input: employees = [[1,2,[5]],[5,-3,[]]], id = 5
Output: -3

*/
//내코드
var GetImportance = function (employees, id) {
  console.log(employees);
  let sum = 0;
  function DFS(id) {
    employees.map((v) => {
      if (v.id === id) {
        sum += v.importance;
        if (v.subordinates.length) {
          v.subordinates.map((d) => {
            DFS(d);
          });
        } else {
          return;
        }
      }
    });
  }
  employees.filter((v) => {
    if (v.id === id) {
      sum += v.importance;
      if (v.subordinates.length) {
        v.subordinates.map((d) => {
          DFS(d);
        });
      }
    }
  });
  return sum;
};
// 추천 코드
var GetImportance = function (employees, id) {
  let employeeMap = new Map();
  for (employee of employees) {
    employeeMap.set(employee.id, {
      importance: employee.importance,
      sub: employee.subordinates,
    });
  }

  let totalImportance = 0;
  let queue = [id];

  while (queue.length > 0) {
    let currentEmployee = employeeMap.get(queue.shift());
    totalImportance += currentEmployee.importance;
    queue.push(...currentEmployee.sub);
  }

  return totalImportance;
};
