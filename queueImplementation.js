class Node{
  constructor(val){
    this.val = val; 
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.firstNode = null;
    this.lastNode = null;
    this.length = 0; 
  }

  // add to the end of queue 
  enqueue(val){
    //create new node
    const newNode = new Node(val);

    // if no nodes, set newNode to be first and last node
    if(!this.firstNode){
      this.firstNode = newNode;
      this.lastNode = newNode;
    } else {
      // set current last node's next to point to newNode
      // set newNode as the last node
      this.lastNode.next = newNode; 
      this.lastNode = newNode; 
    }
    return this.length++;
  }

  // remove from front of queue 
  dequeue(){
    // if no first property return null
    if(!this.firstNode) return null; 

    // store first property in variable
    let temp = this.firstNode; 

    // check if there's only 1 node, set first and last to be null;
    if(this.firstNode === this.lastNode){
      this.lastNode = null;
    }

    // if more than 1 node, set first to be the nest property
    // decrement size by 1 
    this.firstNode = this.firstNode.next;
    this.length--;
    return temp.val;
  }
}

const newQueue = new Queue(); 
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);

console.log(newQueue);

