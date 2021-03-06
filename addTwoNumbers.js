/**You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807. */

var addTwoNumbers = function(l1, l2) {
  let p1 = l1, 
      p2 = l2, 
      num1 = 0, 
      num2 = 0,
      carry = 0,
      solution = new ListNode(0), 
      current = solution;
  
  while(p1 || p2){
      num1 = (p1) ? p1.val : 0; 
      num2 = (p2) ? p2.val : 0; 
      
      let sum = num1 + num2 + carry;
      if(sum > 9){
          current.next = new ListNode(sum - 10);
              current = current.next;
          carry = 1;
      } else {
          current.next = new ListNode(sum);
          current = current.next;
          carry = 0;
      }
      
      if(p1) p1 = p1.next;
      if(p2) p2 = p2.next;
  }
  
  if(carry) current.next = new ListNode(carry);
  
  return solution.next;
};