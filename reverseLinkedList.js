/**Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const reverseLL = (head) => {
  let next = null, 
      prev = null, 
      current = head;
  while(current !== null){
    next = current.next;
    current.next = prev;
    prev = current; 
    current = next;
  }

  return prev;
}