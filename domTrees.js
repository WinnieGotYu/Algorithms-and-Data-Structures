// We have two identical DOM trees, A and B. For DOM tree A, we have
// the location of an element. Create a function to find that same element
// in tree B.

function backwardsPath(element, root) {
  const path = [];
  let current = element;

  // traverse up until root 
  while (current.parentNode) {
      // find index of pointer (current)
      const index = [...current.parentNode.children].indexOf(current);
      //add index to path
      path.push(index);
      //set pointer to parent
      current = current.parentNode;
  }
  
  //set pointer to root of other tree
  current = root;

  //while elements exists in path
  while (path.length) {
      //move pointer down the tree
      current = current.children[path.pop()];
  }

  return current;
}