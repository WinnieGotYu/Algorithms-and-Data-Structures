const rob = function (nums) {
  if (nums.length == 0) return 0;
  let rob = nums[0]; 
  let notRob = 0;
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let copy = rob;
    rob = Math.max(notRob, notRob + nums[i]);
    notRob = Math.max(copy, notRob);
    max = Math.max(max, Math.max(rob, notRob));
  }
  return max;
};

console.log(rob([2,7,9,3,1]))