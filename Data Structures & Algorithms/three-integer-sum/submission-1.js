class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const arr = nums.toSorted((a,b) => a-b);
        const res = [];
        for (let i = 0; i < arr.length; i++) {
            if (i > 0 && arr[i] === arr[i-1]) continue;
            let left = i+1;
            let right = arr.length - 1;
            while (left < right) {
                const sum = arr[i] + arr[left] + arr[right];
                if (sum < 0) left++;
                else if (sum > 0) right--;
                else {
                    res.push([arr[i], arr[left], arr[right]]);
                    left++;
                    // If next left is also equal to prev left; continue;
                    while(arr[left] === arr[left-1] && left < right) left++;
                }
            }
        }
        return res;
    }
}
