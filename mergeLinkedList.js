/**Merge two sorted linked lists 
 * and return it as a new list. 
 * The new list should be made by splicing
 *  together the nodes of the first two lists.
 * 
 *  * Definition for singly-linked list.
 *    function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4 */

function ListNode(val){
  this.val = val;
  this.next = null;
}

function mergeList(l1, l2){
  if(!l1 || !l2){
    return l1 || l2; 
  }
  if(l1.val < l2.val){
    // if l1.val is smaller, then l1.next is the smaller between 
    // l1.next or l2 
    l1.next = mergeList(l1.next, l2);
    return l1;
  } else { 
    // if l2 is smaller, then l2.next is the smaller between
    //l1 or l2.next
    l2.next = mergeList(l2.next, l1); 
    return l2; 
  }
}

let ll1 = new ListNode(1);
ll1.next = new ListNode(2); 
ll1.next.next = new ListNode(4); 

let ll2 = new ListNode(1);
ll2.next = new ListNode(3); 
ll2.next.next = new ListNode(4); 

console.log(mergeList(ll1, ll2)); //[1,1,2,3,4,4]
