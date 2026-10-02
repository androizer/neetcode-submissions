class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    // lengthOfLongestSubstring(s) {
    //     let max = 0;
    //     const set = new Set();
    //     let left = 0;
    //     for (let right = 0; right < s.length; right++) {
    //         while (set.has(s[right])) {
    //             set.delete(s[left]);
    //             left++;
    //         }
    //         set.add(s[right]);
    //         max = Math.max(max, right - left + 1);
    //     }
    //     return max;
    // }
    lengthOfLongestSubstring(str) {
        let max = 0;
        const unique = new Set();

        let l = 0;

        for (let r = 0; r < str.length; r++) {
            const char = str[r];
            while (unique.has(char)) {
                unique.delete(str[l]);
                l++;
            }
            unique.add(char);
            max = Math.max(max, unique.size);
        }

        return max;
    }
}
