/**
 * Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3

 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */

const binaryTreePaths = function(root) {
  const result = []; 

  const traverse = (node, path = "") => {
      if(!node) return;
      if(!node.left && !node.right){
          result.push(path + node.val);
          return;
      }
      traverse(node.left, path + node.val + "->");
      traverse(node.right, path + node.val + "->");
  }
  traverse(root, "");
  return result;
};