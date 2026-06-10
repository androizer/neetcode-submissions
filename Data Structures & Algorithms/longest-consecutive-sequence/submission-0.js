class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const map = new Set(nums);
        let length = 0;
        let longest = 0;
        for (let num of nums) {
            // Find the start sequence
            if (!map.has(num-1)) {
                length = 0;
                // Check for future consecutive numbers
                while(map.has(num + length)) {
                    length++;
                }
                longest = Math.max(length, longest);
            }
        }
        return longest;
    }
}
