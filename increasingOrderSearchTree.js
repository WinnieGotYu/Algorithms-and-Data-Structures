/**
 * Given a binary search tree, rearrange the tree in in-order 
 * so that the leftmost node in the tree is now the root of 
 * the tree, and every node has no left child and only 1 right child.

Example 1:
Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]

       5
      / \
    3    6
   / \    \
  2   4    8
 /        / \ 
1        7   9

Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

 1
  \
   2
    \
     3
      \
       4
        \
         5
          \
           6
            \
             7
              \
               8
                \
                 9
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const increasingBST = (root) => {

  let currentNode = new TreeNode();
  let tempTree = currentNode;

  const traversal = (node) => { //IN-ORDER traversal
    if (!node) return;
    traversal(node.left); // 1. Check `Left` Node
    currentNode.right = new TreeNode(node.val); // 2. Add `Node`to currentNode
    currentNode = currentNode.right; // 3. Move pointer to recently created node
    traversal(node.right);  // 4. Check `Right` Node 
}

  traversal(root);
  return tempTree.right;

};


// const increasingBST = (root) => {
//   const stack = [];
//   let current = null;
//   let newRoot = null;
//   let temp = root;
  
//   while(temp !== null){
//     a.push(temp);
//     temp = temp.left;
//   }

//   while(stack.length){
//     let temp2 = stack.pop();

//     if(!newRoot){
//       newRoot = new TreeNode(temp2.val);
//       current = newRoot;
//     } else {
//       current.right = new TreeNode(temp2.val);
//       current = current.right;
//     }

//     if(temp2.right !== null){
//       a.push(temp2.right);
//       temp2 = temp2.right;
//       while(temp2.left !== null){
//         a.push(temp2.left);
//         temp2 = temp2.left;
//       }
//     }
//   }

//   return newRoot;
// }