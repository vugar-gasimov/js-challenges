function twoSum(nums, target) {
  const numIndices = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numIndices.hasOwnProperty(complement)) {
      return [numIndices[complement], i];
    }
    numIndices[nums[i]] = i;
  }
  return [];
}
const nums = [9, 7, 11, 15, 2];

const target = 26;

console.log(twoSum(nums, target));
