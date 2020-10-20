const threeSum = function(nums) {
    nums.sort((a, b) => {
        return a - b;
    });

    const result = [];
    for (let indexA = 0; indexA < nums.length - 2; indexA++) {
        let indexB = indexA + 1;
        let indexC = nums.length - 1;
        
        if (indexA > 0 && nums[indexA] === nums[indexA - 1]) continue;

        while (indexB < indexC) {
            let sum = nums[indexA] + nums[indexB] + nums[indexC];

            if (sum < 0) {
                indexB++;
            } else if (sum > 0) {
                indexC--;
            } else {
                result.push([nums[indexA], nums[indexB], nums[indexC]]);
                while (nums[indexB] === nums[indexB + 1]) indexB++;
                while (nums[indexC] === nums[indexC - 1]) indexC--;
                indexB++;
                indexC--;
            }
        }
    }
    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));