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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        let valid = true;

        const dfs = (node: TreeNode | null) => {
            if (!node) return 0;

            const left = dfs(node.left);
            const right = dfs(node.right);

            const max = Math.max(left, right);
            valid = valid && Math.abs(left - right) <= 1;
            return 1 + max;
        };

        dfs(root);

        return valid;
    }
}
