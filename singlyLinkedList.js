class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let currHead = this.head;
    this.head = currHead.next;
    this.length--;
    return currHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let counter = 0;
    let currNode = this.head;
    while (counter !== index) {
      currNode = currNode.next;
      counter++;
    }
    return currNode;
  }

  set(val, index) {
    const current = this.get(index);
    if (!current) {
      return false;
    }
    current.val = val;
    return `updated value at index ${index}`;
  }


  insert(val, index) {
    if (index < 0 || index > this.length) return false;

    if (index === this.length) {
      // returns boolean instead of linked list
      return !!this.push(val);
    } else if (index === 0) {
      return !!this.unshift(val);
    } else {
      const newNode = new Node(val);
      const prev = this.get(index - 1);
      const temp = prev.next;
      prev.next = newNode;
      newNode.next = temp;
      this.length++;
      return `inserted ${newNode}`;
    }
  }


  // returns the removed Node
  remove(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    } else if (index === 0) {
      return this.shift();
    } else if (index === this.length) {
      return this.pop();
    } else {
      const prev = this.get(index - 1);
      const removed = prev.next;
      prev.next = removed.next;
      this.length--;
      return removed;
    }
  }

  reverse(){
    let node = this.head; 
    this.head = this.tail; 
    this.tail = node; 
    let prev = null;
    let next = null;
    while(node){
      next = node.next; 
      node.next = prev;
      prev = node; 
      node = next;
    }
    return this;
  }

  print(){
    const arr = [];
    let current = this.head; 
    while(current){
      arr.push(current.val);
      current = current.next
    }
    console.log(arr);
  }
}

let list = new SinglyLinkedList();
list.push("one");
list.push("two");
list.push("three");

console.log(list.reverse());
console.log(list.print());