/**
 * /*
 * 입력설명
 * 첫 줄에 자연수 N이 주어진다.(3<=N<=30)
 * 두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않습니다.
 * ▣ 출력설명
 * 첫 줄부터 중복이 제거된 문자열을 차례로 출력한다.
 * ▣ 입력예제 1
 * 5
 * good
 * time
 * good
 * time
 * student
 * ▣ 출력예제 1
 * good
 * time
 * student
 *
 * @format
 */

function solution(s) {
    let answer;
    //console.log(s.indexOf("time"));
    answer = s.filter(function (v, i) {
        return s.indexOf(v) === i;
    });
    return answer;
}
let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
