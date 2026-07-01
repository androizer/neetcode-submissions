class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }
        let right = s1.length;
        let left = 0;
        const sortedS1 = s1.split('').sort().join('');
        while (right <= s2.length) {
            const substr = s2.substring(left, right);
            const sortedSubstr = substr.split('').sort().join('');
            if (sortedSubstr === sortedS1) {
                return true;
            }
            right++;
            left++;
        }
        return false;
    }
}
