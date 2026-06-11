class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const arr = [];
        for (let i = 0; i < nums.length; i++) {
            let l = 0;
            let r = nums.length - 1;
            let mul = 1;
            while (l <= r) {
                if (l!==i) {
                    mul = mul * nums[l];
                }
                l++;
            }
            arr.push(mul);
        }
        return arr;
    }
}
