/**
 * /*
 * 첫 줄에 문자열이 입력됩니다.
 * ▣ 출력설명
 * 첫 줄에 중복문자가 제거된 문자열을 출력합니다.
 * ▣ 입력예제 1
 * ksekkset
 * ▣ 출력예제 1
 * kset
 *
 * @format
 */

function solution(s) {
    let answer = '';
    //console.log(s.indexOf("K"));
    for (let i = 0; i < s.length; i++) {
        //console.log(s[i], i, s.indexOf(s[i]));
        if (s.indexOf(s[i]) === i) answer += s[i];

        //새로운 방법
        let pos = s.indexOf('k');
        while (pos !== -1) {
            answer++;
            pos = s.indexOf('k', pos + 1);
        }
    }
    return answer;
}
console.log(solution('ksekkset'));
