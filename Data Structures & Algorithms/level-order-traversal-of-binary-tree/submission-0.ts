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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if (!root) return [];

        let res: Array<number[]> = [];

        /** FIFO (push, shift) */
        const queue: TreeNode[] = [root];

        // The traversal are queue based.
        while (queue.length) {
            let levelSize = queue.length; // Capture the snapshot of nodes at the current level
            let currentLevel: number[] = [];

            for (let i = 0; i < levelSize; i++) {
                let node = queue.shift()!; // Remove the first node from the queue
                currentLevel.push(node.val);

                // Enqueue left and right children for the next level
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }

            res.push(currentLevel);
        }
        return res;
    }
}
