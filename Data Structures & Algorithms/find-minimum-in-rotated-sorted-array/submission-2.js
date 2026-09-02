class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);
            if (nums[mid] > nums[right]) {
            left = mid + 1;
            } else {
            right = mid;
            }
        }
        return nums[left];
    }
}

// 0 + (5-0)/2 => 0 + 2 => 2
// l=2, r=5
// 2 + (5-2)/2 => 2 + 1 => 3
// l=3, r=5
// 3 + (5-3)/2 => 3 + 1 => 4
// l=4, r=5
// 4 + (5-4)/2 => 4 + 0 => 4
// l=4, r=4 (break)