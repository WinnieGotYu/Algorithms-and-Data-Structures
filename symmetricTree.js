/**Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3 */

var isSymmetric = function(root) {
  //if root is null, it is a mirror of itself
  if (root === null) return true;

  const isMirror = (left, right) => {
    if(!left && !right) return true;  //since this is binary tree if both null we have completed search
    if((!left || !right) || left.val !== right.val) return false;
    //if all true continue recursion
    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
   }
  return isMirror(root.left, root.right);
};