/**
팩토리얼
자연수 N을 입력하면 N!값을 구하세요.
N! = n*(n-1)*(n-2)*.....*2*1입니다. 
만약 N=5라면 5!=5*4*3*2*1=120입니다.
입력
5
출력
120
 */
const solve = (m, arr) => {
  let ans;
  function DFS(n) {
    if (n === 1) return 1;
    else return n * DFS(n - 1);
  }
  ans = DFS(n);
  return ans;
};
console.log(solve(5));
