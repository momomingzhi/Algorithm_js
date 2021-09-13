/*
Input: s = "the sky is blue"
Output: "blue is sky the"

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces

undefined: 자바스크립트에서 기본형 데이터 타입에 속함
empty: 비어있는 배열을 할당할때는 undefined가 아닌 empty가 지정됨
undefined는 비어있음을 의미하지만 값으로 인식하여 동작하기 때문에 순회의 대상이 됨
이상하게 비어있다고 의미 가지지만 자신이 값으로 존재한다는 것
배열에서 ''는 empty로 인식함
const arr = [1, undefined, null, false, , '', '    '];

arr.filter((element, i) => {
  document.writeln(i) //0 1 2 3 5 6
});
''는 empty로 인식돼서(값이 할당되지 않아서) 순회하지 않는다 -> 4 찍히지 않음

const newArr = arr.filter(Boolean);

newArr.forEach((e, i) => {
  document.write(i + " : " + e + '<br>') //0:1 1: newArr[1].length : 4
})
falsy value 제거하기 위해서 callback 함수로 booelan constructor 전달하면 falsy value ahen tkrwpehla
*/
//내풀이
var reverseWords = function (s) {
  let reversed = s.split(" ");
  reversed = reversed.filter((s) => s);
  let string = "";
  for (let i = reversed.length - 1; i >= 0; i--) {
    if (i === 0) {
      string = string + reversed[i];
    } else string = string + reversed[i] + " ";
  }
  return string;
};
//한줄풀이
var reverseWords = function (s) {
  return s
    .split(" ")
    .filter((e) => e)
    .reverse()
    .join(" ");
};
