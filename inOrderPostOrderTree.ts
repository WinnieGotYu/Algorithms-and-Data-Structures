/**
 * Given inorder and postorder traversal of a tree
 * construct the binary tree
 *
 * inorder=[9,3,15,20,7]
 * postorder=[9,15,7,20,3]
 *
 * return the following tree:
 *     3
 *    / \
 *   9  20
 *      / \
 *     15  7
 */
/** NOTES:
 * last element on postorder is the root = 3
 * L subtree inorder = [9] --> no L or R subtree
 * R subtree inorder = [15, 20, 7] --> 20 is now parent
 * L subtree in = [15]
 * R subtree in = [7]
 *
 *Inorder: <LEFT><ROOT><RIGHT>, postorder: <LEFT><RIGHT><ROOT>
 *
 */

function TreeNode(val: number, left?: object, right?: object) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const inOrderPostOrder = (inorder: Array<number>, postorder: Array<number>) => {
  const hash: Object = {};
  for (let i = 0; i < inorder.length; i++) {
    hash[inorder[i]] = i;
  }

  console.log(JSON.stringify(hash));

  const helper = (start: number, end: number) => {
    if (start > end) {
      return null;
    }
    let val = postorder.pop();
    let root = new TreeNode(val);
    root.right = helper(hash[val] + 1, end);
    root.left = helper(start, hash[val] - 1);
    return root;
  };

  return helper(0, inorder.length - 1);
};
