class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i,j;
        let dict = {};
        for(i = 0; i < nums.length; i++) {
            const value = nums[i];
            const diff = target - value;
            if (dict[diff] !== undefined) {
                return [dict[diff], i];
            }
            dict[value] = i;
        }
    }
}
