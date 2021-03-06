/*
7*7 격자판의 정보가 주어집니다.
▣ 출력설명
첫 번째 줄에 경로의 가지수를 출력한다.
▣ 입력예제 1 
0 0 0 0 0 0 0
0 1 1 1 1 1 0
0 0 0 1 0 0 0
1 1 0 1 0 1 1
1 1 0 0 0 0 1
1 1 0 1 1 0 0
1 0 0 0 0 0 0
▣ 출력예제 1
8

*/
const solve = (board) => {
  let ans = 0;
  let dx = [-1, 0, 1, 0];
  let dx = [0, 1, 0, -1];
  function DFS(x, y) {
    if (x === 6 && y === 6) {
      ans++;
    } else {
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = x + dy[k];
        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
          board[nx][ny] = 1;
          DFS(nx, ny);
          board[nx][ny] = 0; //뒤로 빽하는 지점 체크 풀어주기
        }
      }
    }
  }
  //첫번째 체크하고 시작
  board[0][0] = 1;
  DFS(0, 0);
  return ans;
};

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
