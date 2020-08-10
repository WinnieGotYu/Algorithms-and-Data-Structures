/**
 * @param {number[][]} grid
 * @return {number}
 * 
 * In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent 
(4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse 
until no cell has a fresh orange. 
If this is impossible, return -1 instead.

Example 1: 
Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Example 2:
Input: [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation:  The orange in the bottom left 
corner (row 2, column 0) is never rotten, 
because rotting only happens 4-directionally.

Example 3:
Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.
 */
var orangesRotting = function (grid) {
  // explore nodes (oranges) with the smallest depth first, we're guaranteed that each orange that
  //becomes rotten does so with the lowest possible depth number.
  //corner cases
  if (grid.length < 1) return 0;

  //define variables
  const ROW = grid.length,
    COL = grid[0].length,
    FRESH = 1,
    ROTTEN = 2;
  const DIRECTIONS = [
    [-1, 0], // 
    [0, -1],
    [1, 0],
    [0, 1],
  ];
  let freshCount = 0,
    rottenQueue = [],
    minutes = 0;

  //calculate fresh count and rotten queue
  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (grid[i][j] === 1) freshCount++;
      if (grid[i][j] === 2) rottenQueue.push([i, j, minutes]);
    }
  }

  //dfs rotten queue until fresh count is zero otherwise return -1;
  while (rottenQueue.length > 0) {
    let orange = rottenQueue.shift();
    let [x, y, _minutes] = orange;
    for (let [dx, dy] of DIRECTIONS) {
      const cx = x + dx,
            cy = y + dy;
      // check if out of bounds or already rotten
      if (cx < 0 || cy < 0 || cx >= ROW || cy >= COL || grid[cx][cy] != FRESH)
        continue;
      grid[cx][cy] = ROTTEN;
      freshCount--;
      minutes = _minutes + 1;
      rottenQueue.push([cx, cy, minutes]);
    }
  }

  return freshCount > 0 ? -1 : minutes;
};
