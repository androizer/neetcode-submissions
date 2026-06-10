class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const nums = numbers;
        let [left, right] = [0, nums.length-1];
        while (left < right) {
            const sum = nums[left] + nums[right];
            if (sum > target) right--;
            else if (sum < target) left++;
            else return [left+1, right+1];
        }
    }
}
