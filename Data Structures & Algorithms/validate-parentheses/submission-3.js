class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // This is important for mapping to find the current's bracket opposite
        // And this should be mapping of close:open
        const closeToOpen = {
            ")": "(",
            "}": "{",
            "]": "[",
        };
        const stack = [];

        for (const c of s) {
            // If the current bracket type is close?
            if (closeToOpen[c]) {
                // Only remove it stack is not empty and
                // stack's first element is equal to close bracket
                if (stack.length && stack[0] === closeToOpen[c]) {
                    stack.shift();
                } else {
                    return false;
                }
            } else {
                // Keep on adding to the start of the array
                stack.unshift(c);
            }
        }
        return !stack.length;
    }
}
