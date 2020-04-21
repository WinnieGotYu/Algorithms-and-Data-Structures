/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

// This is pre-order BST (Root, left right)
function isValidBST(treeRoot, lowerBound, upperBound){
  
  if (!treeRoot) return true;

  if (treeRoot.value >= upperBound || treeRoot.value <= lowerBound) {
    return false;
  }

  const left = isValidBST(treeRoot.left, lowerBound, treeRoot.value)
  const right = isValidBST(treeRoot.right, treeRoot.value, upperBound);
  let result = left && right;
  
  return result;
}


// Tests

let desc = 'Simple small invalid BST'; 
let treeRoot = new BinaryTreeNode(5);
let leftNode = treeRoot.insertLeft(4); 
let rightode = treeRoot.insertRight(6);
leftNode.insertRight(7);
assertEquals(isValidBST(treeRoot), false, desc);

desc = 'valid full tree';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
rightNode.insertRight(80);
assertEquals(isValidBST(treeRoot), true, desc);

desc = 'both subtrees valid';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(20);
leftNode.insertRight(60);
rightNode = treeRoot.insertRight(80);
rightNode.insertLeft(70);
rightNode.insertRight(90);
assertEquals(isValidBST(treeRoot), false, desc);

desc = 'descending linked list';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(40);
leftNode = leftNode.insertLeft(30);
leftNode = leftNode.insertLeft(20);
leftNode = leftNode.insertLeft(10);
assertEquals(isValidBST(treeRoot), true, desc);

desc = 'out of order linked list';
treeRoot = new BinaryTreeNode(50);
rightNode = treeRoot.insertRight(70);
rightNode = rightNode.insertRight(60);
rightNode = rightNode.insertRight(80);
assertEquals(isValidBST(treeRoot), false, desc);

desc = 'one node tree';
treeRoot = new BinaryTreeNode(50);
assertEquals(isValidBST(treeRoot), true, desc);

function assertEquals(a, b, desc){
  if(a === b){
    console.log(`"${desc}", Expected: ${a}, Output: ${b} ✅`)
  } else {
    console.log(`"${desc}", Expected: ${a} Output: ${b} ❌`)
  }
}
