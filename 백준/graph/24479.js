/*
오늘도 서준이는 깊이 우선 탐색(DFS) 수업 조교를 하고 있다. 아빠가 수업한 내용을 학생들이 잘 이해했는지 문제를 통해서 확인해보자.

N개의 정점과 M개의 간선으로 구성된 무방향 그래프(undirected graph)가 주어진다. 정점 번호는 1번부터 N번이고 모든 간선의 가중치는 1이다. 정점 R에서 시작하여 깊이 우선 탐색으로 노드를 방문할 경우 노드의 방문 순서를 출력하자.

깊이 우선 탐색 의사 코드는 다음과 같다. 인접 정점은 오름차순으로 방문한다.

dfs(V, E, R) {  # V : 정점 집합, E : 간선 집합, R : 시작 정점
    visited[R] <- YES;  # 시작 정점 R을 방문 했다고 표시한다.
    for each x ∈ E(R)  # E(R) : 정점 R의 인접 정점 집합.(정점 번호를 오름차순으로 방문한다)
        if (visited[x] = NO) then dfs(V, E, x);
}
입력
첫째 줄에 정점의 수 N (5 ≤ N ≤ 100,000), 간선의 수 M (1 ≤ M ≤ 200,000), 시작 정점 R (1 ≤ R ≤ N)이 주어진다.

다음 M개 줄에 간선 정보 u v가 주어지며 정점 u와 정점 v의 가중치 1인 양방향 간선을 나타낸다. (1 ≤ u < v ≤ N, u ≠ v) 모든 간선의 (u, v) 쌍의 값은 서로 다르다.

출력
첫째 줄부터 N개의 줄에 정수를 한 개씩 출력한다. i번째 줄에는 정점 i의 방문 순서를 출력한다. 시작 정점의 방문 순서는 1이다. 시작 정점에서 방문할 수 없는 경우 0을 출력한다.

5 5 1
1 4
1 2
2 3
2 4
3 4

1
2
3
4
0

정점 1번에서 정점 2번을 방문한다. 정점 2번에서 정점 3번을 방문한다. 정점 3번에서 정점 4번을 방문한다. 정점 5번은 정점 1번에서 방문할 수 없다.


 */

var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...m] = fs.readFileSync("./input.txt").toString().trim().split("\n");
const [n, k, start] = N.split(" ").map(Number);
const arr = m.map((x) => +x);

const visited = Array(n+1).fill(0);
let cnt = 1;
const graph = Array.from(Array(n), () => []);

for (let str of m) {
    const [x, y] = str.split(" ");
    graph[x].push(y);
    graph[y].push(x);
  }
// for(let i=0;i<m.length;i++){
//     const [x,y] = m[i].split(' ');
    // graph[start] = graph[start] ? [...graph[start],end] : [end];
    // graph[end] = graph[end] ? [...graph[end],start] : [start];
    // graph[start].sort();
    // graph[end].sort();
//     graph[x].push(y);
//     graph[y].push(x);
// }
graph.forEach((e) => e.sort((a, b) => a - b));
const answer = new Array(n).fill(0);

const dfs = (target) =>{
    // console.log({target})
    visited[target] = 1;
    answer[target-1] = cnt++;
   for (let next of graph[target]) {
      if (visited[next]) continue;

      dfs(+next);
    }
}
// visited[start] = cnt++;

dfs(start);
console.log(answer.join("\n"))

// let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
// const [n,m,start] = input.shift().split(' ').map(Number);

// const graph = Array.from(Array(n+1),()=>[]);
// const visited = new Array(n+1).fill(false);
// for(let str of input){
//     const [x,y] = str.split(' ');
//     graph[x].push(y);
//     graph[y].push(x);
// }

// graph.forEach(e=>e.sort((a,b)=>a-b));
// let cnt = 1;
// const answer = new Array(n).fill(0);
// const dfs = (cur) =>{
//     visited[cur] = true;
//     answer[cur-1] = cnt++;
//     for(let next of graph[cur]){
//         if(visited[next]) continue;
//         dfs(+next);
//     }
// }
// dfs(start);

// console.log(answer.join('\n'))