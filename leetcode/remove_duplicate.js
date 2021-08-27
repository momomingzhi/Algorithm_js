/**
 * /*
 * 문제 이해하는데에 너무 오랜 시간이 걸림...
 * frequency에 값이 없으면 스택에서 뺄 수 없다....
 *
 * @format
 */

var removeDuplicateLetters = function (s) {
    const stack = [];
    const visited = new Map();
    const frequency = new Map();

    for (let i = 0; i < s.length; i += 1) {
        if (frequency.has(s[i])) frequency.set(s[i], frequency.get(s[i]) + 1);
        else {
            frequency.set(s[i], 1);
            visited.set(s[i], 0);
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (!stack.length) {
            stack.push(s[i]);
            visited.set(s[i], 1);
        } else {
            let top = stack[stack.length - 1];
            if (frequency.get(top) > 0 && s[i] < top && !visited.get(s[i])) {
                while (
                    stack.length &&
                    frequency.get(top) > 0 &&
                    s[i] < top &&
                    !visited.get(s[i])
                ) {
                    let popped = stack.pop();
                    top = stack[stack.length - 1];
                    visited.set(popped, 0);
                }

                stack.push(s[i]);
                visited.set(s[i], 1);
            } else if (!visited.get(s[i])) {
                stack.push(s[i]);
                visited.set(s[i], 1);
            }
        }

        frequency.set(s[i], frequency.get(s[i]) - 1);
    }

    return stack.join('');
};
