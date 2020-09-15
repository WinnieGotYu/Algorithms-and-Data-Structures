/**Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, 
where "adjacent" cells are those horizontally or vertically neighboring. 
The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false. */

var exist = function(board, word) {
  if(board.length === 0) return false;
  
  const ROW = board.length; 
  const COL = board[0].length;
  
  const traverse = (x, y, k) => {
      const directions = [[1,0], [-1, 0], [0, 1], [0, -1]];
      if(board[x][y] !== word[k]) return false;
      if(k === word.length - 1) return true;

      board[x][y] = "-" // Mark as visited

      for(const [dx, dy] of directions){
          const moveX = dx + x;
          const moveY = dy + y;
          // If x and y are within bounds;
          if(moveX >= 0 && moveX < ROW && moveY >= 0 && moveY < COL){
             if(traverse(moveX, moveY, k+1)){
                 return true;
             };
          }; 
      }

      board[x][y] = word[k]; // Reset board
      return false;
  }

  // Loop through array to find start
  for(let i = 0; i < ROW; i++){
      for(let j = 0; j < COL; j++){
          if(traverse(i, j, 0)) return true;
      }
  }
  
  return false;
};


console.log(exist([['A','B','C','E'], ['S','F','C','S'], ['A','D','E','E']], "ABCB")) // false;
console.log(exist([['A','B','C','E'], ['S','F','C','S'], ['A','D','E','E']], "ABCCED")) // true;