const maxProductDifference: (A: number[]) => number = function (nums) {
    nums.sort((a, b) => a - b);
    const n: number = nums.length;
    return nums[n - 1] * nums[n - 2] - nums[0] * nums[1];
};
