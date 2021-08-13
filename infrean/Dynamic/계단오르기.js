/**
 * /*
 * 첫째 줄은 계단의 개수인 자연수 N(3≤N≤45)이 주어집니다.
 * ▣ 출력설명
 * 첫 번째 줄에 올라가는 방법의 수를 출력합니다.
 * ▣ 입력예제 1
 * 7
 * ▣ 출력예제 1
 * 21
 *
 * @format
 */

const solve = (n) => {
    let ans = 0;
    let dy = Array.from({ length: n + 1 }, () => 0);
    dy[1] = 1;
    dy[2] = 2;
    for (let i = 3; i <= n; i) {
        dy[i] = dy[i - 2] + dy[i - 1];
    }
    return ans;
};

console.log(solution(7));
