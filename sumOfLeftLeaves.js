var sumOfLeftLeaves = function(root) {
    if (!root) return null;
        
    let sum = 0;
    
    function findSum(root, side=null) {
        if (!root) return null;
        if (side === 'left' && root.left === null && root.right === null) {
            sum += root.val;
        }
            
        if (root.left) findSum(root.left, "left");
        if (root.right) findSum(root.right);
    }
    findSum(root);
    return sum;
};