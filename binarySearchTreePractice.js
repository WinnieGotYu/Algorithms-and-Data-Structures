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

  // traverse tree to look for value and return node
  find(value) {
    if (!this.root) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (current === null) {
      return `${value} is not in the Tree`;
    }
    return current;
  }

  // visit all levels on the trees first
  BFS() {
    // create a queue and a variable to store visited nodes
    const queue = [],
      visited = [];

    // Place root node into queue
    let currentNode = this.root;
    queue.push(currentNode);

    // loop as long as there is something in the queue
    while (queue.length) {
      // dequeue a node from the queue and push to visited
      currentNode = queue.shift();
      visited.push(currentNode.value);

      // if the dequeued node has a left, add to queue
      if (currentNode.left) queue.push(currentNode.left);

      // if the dequeued node has a right, add to queue
      if (currentNode.right) queue.push(currentNode.right);
    }

    return visited;
  }

  // Sample Tree
  //   10
  //  6  15
  //3  8   20

  DFSPreOrder(){
    const visited = []; 

    function traverse(node){
      visited.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited; // [ 10, 6, 3, 8, 15, 20 ]

  }

  DFSPostOrder(){
    const visited = []; 

    function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      visited.push(node.value);
    }

    traverse(this.root);
    return visited; // [ 3, 8, 6, 20, 15, 10 ]
  }

  DFSInOrder(){
    const visited = []; 

    function traverse(node){
      if(node.left) traverse(node.left);
      visited.push(node.value);
      if(node.right) traverse(node.right);
    }
    
    traverse(this.root);
    return visited;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
