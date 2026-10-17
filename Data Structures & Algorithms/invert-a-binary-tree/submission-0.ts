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
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode {
        // This can be done with BFS using queue
        /** FIFO (push, shift)  */
        if (!root) return root;
        const queue = [root];

        while (queue.length) {
            const node = queue.shift();

            const [left, right] = [node.right, node.left];

            node.left = left;
            node.right = right;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return root;
    }
}
