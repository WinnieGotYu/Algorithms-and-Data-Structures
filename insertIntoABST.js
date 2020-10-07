/**
 * You are given the root node of a binary search tree (BST) 
 * and a value to insert into the tree. 
 * Return the root node of the BST after the insertion. 
 * It is guaranteed that the new value does not exist in the original BST.

Notice that there may exist multiple valid ways for the insertion, 
as long as the tree remains a BST after insertion. You can return any of them.

Input: root = [4,2,7,1,3], val = 5
Output: [4,2,7,1,3,5]

Input: root = [40,20,60,10,30,50,70], val = 25
Output: [40,20,60,10,30,50,70,null,null,25]

Input: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
Output: [4,2,7,1,3,5]
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(root === null) return new TreeNode(val);

    let currentNode = root;
    while(true){
      if(currentNode.val <= val){
        if(currentNode.right !== null){
          currentNode = currentNode.right;
        } else {
          currentNode.right = new TreeNode(val);
          break;
        }
      } else {
        if(currentNode.left === null){
          currentNode = currentNode.left;
        } else {
          currentNode.left = new TreeNode(val);
        }
      }
    }
    return root;
};