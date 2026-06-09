class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const dict = {};
        for (let num of nums) {
            if (dict[num] === undefined) {
                dict[num] = 0;
            }
            dict[num] = dict[num] + 1;
        }
        return Object.entries(dict)
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(([key]) => Number(key));
    }
}
