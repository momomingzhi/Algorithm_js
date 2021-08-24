/**
 * /*
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 *
 * @format
 */

var isValid = function (s) {
    let stack = [];
    for (let x of s) {
        if (x === '(' || x === '[' || x === '{') {
            stack.push(x);
        } else {
            let pop = stack.pop();
            if (pop === '(') {
                if (x !== ')') return false;
            } else if (pop === '[') {
                if (x !== ']') return false;
            } else if (pop === '{') {
                if (x !== '}') return false;
            } else {
                return false;
            }
        }
    }
    if (stack.length > 0) return false;
    return true;
};

//더 간단한 풀이
var isValid = function (s) {
    const arr = [];
    const obj = {
        '{': '}',
        '[': ']',
        '(': ')',
    };
    for (let i = 0; i < s.length; i++) {
        if (obj.hasOwnProperty(s[i])) {
            arr.push(s[i]);
        } else {
            if (obj[arr[arr.length - 1]] == s[i]) {
                arr.pop();
            } else {
                return false;
            }
        }
    }

    return arr.length == 0 ? true : false;
};
