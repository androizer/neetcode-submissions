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
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        const result: number[] = [];

        function dfs(node: TreeNode | null, level: number) {
            if (!node) return;

            // If this is the first time we've reached this level,
            // add the node's value (since we traverse right first, this is the rightmost node)
            // The priority is on the right side, but if at that level you're not able to find any
            // of the right child of the Right subtree, then we fall back to traversal as a left\
            // child, but only if the length of the queue is matching the level.
            if (level === result.length) {
                result.push(node.val);
            }

            // Recursively visit the right subtree first, then the left subtree
            dfs(node.right, level + 1);
            dfs(node.left, level + 1);
        }

        dfs(root, 0);
        return result;
    }
}
