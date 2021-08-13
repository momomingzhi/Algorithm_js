/**
 * /*
 *
 * 첫 번째 줄에 자연수 N(3<=N<=20)이 주어집니다.
 * 두 번째 줄부터 격자판 정보가 주어진다.
 * ▣ 출력설명
 * 첫 번째 줄에 섬의 개수를 출력한다.
 * ▣ 입력예제 1
 * 7
 * 1 1 0 0 0 1 0
 * 0 1 1 0 1 1 0
 * 0 1 0 0 0 0 0
 * 0 0 0 1 0 1 1
 * 1 1 0 1 1 0 0
 * 1 0 0 0 1 0 0
 * 1 0 1 0 1 0 0
 * ▣ 출력예제 1
 * 5
 *
 * @format
 */

const solve = (board) => {
    //1번 정점에 갔다가 다시 못오게 해야해 체크 배열 필요
    let ans = 0;
    let n = board.length;
    let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    let dy = [0, 1, 1, 1, 0, -1, -1, -1];

    function DFS(x, y) {
        board[x][y] = 0;
        for (let k = 0; k < 8; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];

            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
                DFS(nx, ny);
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                ans++;
                DFS(i, j);
            }
        }
    }
    return ans;
};

let arr = [
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
