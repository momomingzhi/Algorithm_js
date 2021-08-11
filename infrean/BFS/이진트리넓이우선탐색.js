/*
넓이 우선 탐색 : 1 2 3 4 5 6 7

*/
const solve = (s, e) => {
  //최단거리 할때 bfs
  let ans = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  ch[s] = 1;
  queue.push(s);
  while (queue.length) {
    //0되면 나온다는 의미
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return dis[x] + 1; //dis[x] 여기까지 점프해서 오는 값
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1; //도착지점 아니면 dis 계속 구하면서 가야해
      }
    }
  }
  return ans;
};
console.log(solve(5, 14));
