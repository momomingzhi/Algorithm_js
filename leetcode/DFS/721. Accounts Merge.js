/*
Given a list of accounts where each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.

Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some common email to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.

After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.

 

Example 1:

Input: accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
Output: [["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
Explanation:
The first and second John's are the same person as they have the common email "johnsmith@mail.com".
The third John and Mary are different people as none of their email addresses are used by other accounts.
We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'], 
['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.
Example 2:

Input: accounts = [["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]]
Output: [["Ethan","Ethan0@m.co","Ethan4@m.co","Ethan5@m.co"],["Gabe","Gabe0@m.co","Gabe1@m.co","Gabe3@m.co"],["Hanzo","Hanzo0@m.co","Hanzo1@m.co","Hanzo3@m.co"],["Kevin","Kevin0@m.co","Kevin3@m.co","Kevin5@m.co"],["Fern","Fern0@m.co","Fern1@m.co","Fern5@m.co"]]
*/
// 어렵다...
// 코드 중간까지 짜다가 포기
// 내코드
var accountsMerge = function (accounts) {
  let n = accounts.length;
  let res = [];
  let visited = Array.from({ length: n }, () => 0);
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 1; j < accounts[i].length; j++) {
      arr.push(accounts[i][j]);
    }
    visited[i] = 1;
    dfs(accounts[i][0], arr);
    arr = [];
  }
  console.log(res);
  function dfs(name, arr) {
    for (let i = 0; i < n; i++) {
      if (!visited[i] && accounts[i][0] === name) {
        for (let j = 1; j < accounts[i].length; j++) {
          if (arr.indexOf(accounts[i][j]) !== 0) {
            //같은 계정이 존재
            arr.push(accounts[i][j]);
          }
        }
        res.push([name, arr]);
      }
    }
  }
};
//
var accountsMerge = function (accounts) {
  let graph = {};
  let nameDict = {};

  for (let acc of accounts) {
    let name = acc[0];
    nameDict[acc[1]] = name;
    for (let i = 1; i < acc.length; i++) {
      if (!graph[acc[i]]) graph[acc[i]] = new Set();
      nameDict[acc[i]] = name;
      /*
            console.log(nameDict) 결과
            {
                'johnsmith@mail.com': 'John',
                'john_newyork@mail.com': 'John',
                'john00@mail.com': 'John',
                'mary@mail.com': 'Mary',
                'johnnybravo@mail.com': 'John'
            }
            */
      if (i != 1) {
        graph[acc[1]].add(acc[i]);
        graph[acc[i]].add(acc[1]);
      }
    }
    /*
        {
            'johnsmith@mail.com': Set(2) { 'john_newyork@mail.com', 'john00@mail.com' },
            'john_newyork@mail.com': Set(1) { 'johnsmith@mail.com' },
            'john00@mail.com': Set(1) { 'johnsmith@mail.com' },
            'mary@mail.com': Set(0) {},
            'johnnybravo@mail.com': Set(0) {}
        }
        
        */
  }
  let res = [];
  let visited = new Set();
  let dfs = function (key) {
    visited.add(key);
    let emails = [key];
    graph[key].forEach((e) => {
      console.log("e: ", e);
      /*
            e:  john_newyork@mail.com
            e:  johnsmith@mail.com
            e:  john00@mail.com
            e:  johnsmith@mail.com
            */
      if (!visited.has(e)) {
        emails.push(...dfs(e));
      }
    });
    return emails;
  };
  for (let key in graph) {
    if (!visited.has(key)) {
      let tmp = dfs(key);
      console.log("tmp:", tmp, nameDict[tmp[0]]);
      /*
                tmp: [ 'johnsmith@mail.com', 'john_newyork@mail.com', 'john00@mail.com' ] John
                tmp: [ 'mary@mail.com' ] Mary
                tmp: [ 'johnnybravo@mail.com' ] John
            */
      tmp.sort();
      //tmp 배열 맨 앞에 사람 이름 넣어주기
      tmp.unshift(nameDict[tmp[0]]);
      res.push(tmp);
    }
  }
  console.log(graph, nameDict);
  return res;
};
