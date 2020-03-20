/**Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5 */

function ListNode(val){
  this.val = val;
  this.next = null;
}

function removeLL(head, val){
  if(!head) return null;
  let newLinkedList = new ListNode(0);
    newLinkedList.next = head;
  
  let prev = newLinkedList, 
      curr = head; 

  while(curr){
    if(curr.val === val){
      prev.next = curr.next;
    } else {
      prev = curr 
    }
    curr = curr.next;
  }
  return newLinkedList.next;
}

let lists = new ListNode(1),
two = new ListNode(2),
six = new ListNode(6), 
three = new ListNode(3), 
five = new ListNode(5);

lists.next = two; 
two.next = six;
six.next = three; 
three.next = five; 


console.log(removeLL(lists, 6)) //[1,2,3,5]