class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // only uppercase english characters
        // choose up to k chars and replace them with other char
        // count the frequency of each character in the window
        let left = 0;
        let res = 0;
        const freqMap = new Map();
        for (let right = 0; right < s.length; right++) {
            freqMap.set(s[right], (freqMap.get(s[right]) || 0) + 1);

            while ((right - left + 1) - Math.max(...freqMap.values()) > k) {
                freqMap.set(s[left], freqMap.get(s[left]) - 1)
                left++;
            }

            res = Math.max(res, right - left + 1);
        }
        return res;
    }
}
