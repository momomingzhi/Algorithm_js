/**
 * /*
 * 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는
 * 프로그램을 작성하세요.
 * ▣ 입력설명
 * 첫 번째 줄에 문자열이 입력된다.
 * ▣ 출력설명
 * 첫 번째 줄에 바뀐 단어를 출력한다.
 * ▣ 입력예제 1
 * BANANA
 * ▣ 출력예제 1
 * B#N#N#
 *
 * @format
 */

function solution(s) {
    let answer = '';
    for (let x of s) {
        if (x == 'A') answer += '#';
        else answer += x;
    }
    return answer;
}

let str = 'BANANA';
console.log(solution(str));

let ans = s;
ans = s.replace(/A/, '#'); //이렇게만 하면 처음에 만난 A만 이렇게 만남
ans = s.replace(/A/g, '#'); //전체 다 바꿔주는 정규식
//string은 값을 반환하는 거지 얕은 복사 하는 건 아님
