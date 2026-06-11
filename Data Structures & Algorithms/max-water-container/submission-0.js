class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0;
        let left = 0, right = heights.length-1;
        while (left < right) {
            const max = Math.min(heights[left], heights[right]) * (right-left);
            res = Math.max(res, max);
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return res;
    }
}
