/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root: TreeNode | null, targetSum: number): boolean {
        if (!root) {
            return false;
        }
        if (!root.left && !root.right && root.val === targetSum) {
            return true;
        }
        const remainder = targetSum - root.val;
        return this.hasPathSum(root.left, remainder) || this.hasPathSum(root.right, remainder);
    }
}
