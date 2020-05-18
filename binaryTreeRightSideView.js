/**Given a binary tree, imagine yourself standing on the right side of it, 
 * return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <--- 
  
  
  
  //    10
  //  6     15
  //3  8   13  20
  */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    // check if there is a root, if not root is now new Node
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          // update current to traverse further
          current = current.left;
        } else if (value > current.value) {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  rightSideView() {
    if(!this.root) return [];
    
    let res = [];
    
    function traverse(node,depth) {
        if(!node) {
            return;
        }
        if(!res[depth]) {
            res[depth] = node.value;
        }
        traverse(node.right, depth +1);
        traverse(node.left, depth + 1);
    }
    
    traverse(this.root,0);
    return res;
  }
}

const tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(6);
// tree.insert(15);
// tree.insert(3);
// tree.insert(8);
// tree.insert(20);
// tree.insert(13);
tree.insert(1);
tree.insert(2);

console.log(tree.rightSideView());