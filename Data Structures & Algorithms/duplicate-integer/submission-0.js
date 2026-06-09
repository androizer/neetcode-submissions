class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const occMap = new Map();
        for(let i = 0; i < nums.length; i++) {
            if (occMap.has(nums[i])) {
                return true;
            }
            occMap.set(nums[i], 1);
        }
        return false;
    }
}
