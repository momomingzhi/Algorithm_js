/*
길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있
으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

입력
6 7 11
출력
YES
*/
function solution(a,b,c){
	let ans = "yes", max;
	let sum = a+b+c;
	if(a>b) max = a;
	else max = b;
	if(c<max) max = c;
	if((sum-max) <= max) ans = "NO"
	return ans;

}