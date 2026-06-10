class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const map = new Map();
        const indexes = [];
        for (let i = 0; i < numbers.length; i++) {
            const diff = target - numbers[i];
            if (map.has(diff)) {
                return [map.get(diff), i+1];
            }
            map.set(numbers[i], i+1);
        }
        return [];
    }
}
