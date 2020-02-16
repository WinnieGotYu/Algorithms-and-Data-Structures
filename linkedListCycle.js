/* Given a linked list, determine if it has a cycle in it.
  
Definition for singly-linked list.
  function ListNode(val) {
      this.val = val;
      this.next = null;


To represent a cycle in the given linked list, we use an integer 
pos which represents the position (0-indexed) in the linked list where tail 
connects to. If pos is -1, then there is no cycle in the linked list.

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var hasCycle = function(head) {
  if (!head || !head.next) {
    // no list
    // or just the head (can't have a cycle right?!)
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    if (fast === slow) return true;

    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
};

//create LL 
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
node1.next = node2;
node2.next = node3; 
node3.next = node4;
node4.next = node2;

console.log(hasCycle(node1)); //True 