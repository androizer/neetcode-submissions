class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0;
        let left = 0, right = 1;
        while (right < prices.length) {
            if (prices[left] < prices[right]) {
                const profit = prices[right] - prices[left];
                res = Math.max(res, profit);
            } else {
                left = right;
            }
            right += 1;
        }
        return res;
    }
}
