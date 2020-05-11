/** Given a 2D board and a word, find if the word exists in the grid.

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
  //helper function depth first search in 2D array
  let dfs = (board, i, j, word, count = 0) => {
    if (count === word.length) return true;
    //check if out of bound
    if (
      i < 0 ||
      i >= board.length ||
      j < 0 ||
      j >= board[0].length ||
      board[i][j] !== word[count]
    )
      return false;
    let temp = board[i][j];
    console.log("temp", temp);
    board[i][j] = "";
    //run recursion for neighbors
    let found =
      dfs(board, i - 1, j, word, count + 1) ||
      dfs(board, i + 1, j, word, count + 1) ||
      dfs(board, i, j - 1, word, count + 1) ||
      dfs(board, i, j + 1, word, count + 1);
    board[i][j] = temp;
    return found;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0] && dfs(board, i, j, word)) {
        return true;
      }
    }
  }
  return false;
};


console.log(exist(
  [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
  ],
  "SEE"
));


OTHERS: 

var exist = function(matrix, word) {
  var wordLength = word.length,
      i,
      j;
  
  word = word.split("");
  
  var verify = function(row, col, matrix, path){
      if(row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || matrix[row][col] != word[path] || path > wordLength)
          return false;
      // Up to this point, we found the char we were looking for
      path++;
      matrix[row][col] = '#';
      
      //If we find the word
      if(path === wordLength)
          return true;
      //Up
      if(verify(row - 1, col, matrix, path))
          return true;
      //Right
      if(verify(row, col + 1, matrix, path))
          return true;
      //Down
      if(verify(row + 1, col, matrix, path))
          return true;
      //Left
      if(verify(row, col - 1, matrix, path))
          return true;
      // Backtrack
      matrix[row][col] = word[--path];
      return false;
  };
  
  for(i = 0; i < matrix.length; i++){
      for(j = 0; j < matrix[i].length; j++){
          if(verify(i, j, matrix, 0))
              return true;
      }
  }
  
  return false;
};