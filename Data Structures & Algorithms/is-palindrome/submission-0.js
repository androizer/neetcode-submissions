class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const original = s.toLowerCase()
            .split('')
            // Check for alphanumeric
            .filter((v) => /^[a-z0-9]+$/.test(v))
            .join('');
        const reversed = original.split('')
            .reverse()
            .join('');
        return original === reversed;
    }
}
