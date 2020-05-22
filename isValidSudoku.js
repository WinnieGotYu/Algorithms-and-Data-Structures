var isValidSudoku = function(board) {
  const seen = {};
  
  for (let row = 0; row < 9; row ++) {
    for (let col = 0; col < 9; col ++) {
      const val = board[row][col];
      
      if (val === '.') continue;
      
      const keyRow = `row ${row} has ${val}`;
      const keyCol = `col ${col} has ${val}`;
      const keyBox = `box ${Math.floor(row / 3)}-${Math.floor(col / 3)} has ${val}`;

      if (seen[keyRow] || seen[keyCol] || seen[keyBox]) return false;

      seen[keyRow] = true;
      seen[keyCol] = true;
      seen[keyBox] = true;
    }
  }
  
  return true;
};


console.log(isValidSudoku([
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]));