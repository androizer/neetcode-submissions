class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const closeToOpen = {
            ")": "(",
            "}": "{",
            "]": "[",
        };
        const stack = [];

        for (const c of s) {
            if (closeToOpen[c]) {
                if (stack.length && stack[0] === closeToOpen[c]) {
                    stack.shift();
                } else {
                    return false;
                }
            } else {
                stack.unshift(c);
            }
        }
        return !stack.length;
    }
}
