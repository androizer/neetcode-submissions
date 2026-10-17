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
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        let res = 0;
        /** LIFO (push, pop) */
        const stack: Array<[TreeNode, number]> = [[root, 1]];

        while (stack.length) {
            const current = stack.pop();
            const [node, depth] = current;

            if (node) {
                res = Math.max(res, depth);
                stack.push([node.left, depth + 1]);
                stack.push([node.right, depth + 1]);
            }
        }
        return res;
    }
}
