/**
 * Given a binary tree, return the bottom-up 
 * level order traversal of its nodes' values. 
 * (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
 */

const levelOrderBottom = (root) => {
  if (!root) return [];
  const results = [];
  const queue = [root];

  while (queue.length) {
    // Add empty array to the front
    results.unshift([]);

    let levelLength = queue.length;
    let i = 0;

    while (i < levelLength) {
      let current = queue.shift();
      results[0].push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      i++;
    }
  }

  return results;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(7);
tree.right.right = new TreeNode(15);
tree.right.right.left = new TreeNode(70);
tree.right.right.right = new TreeNode(80);
tree.right.left.right = new TreeNode(200);
tree.right.left.left = new TreeNode(100);

console.log(levelOrderBottom(tree)); // [ [ 100, 200, 70, 80 ], [ 15, 7 ], [ 9, 20 ], [ 3 ] ]
/**
 
       3
     /   \
    9     20
         /   \ 
        7     15
      / \     / \ 
     100 200 70  80

 */