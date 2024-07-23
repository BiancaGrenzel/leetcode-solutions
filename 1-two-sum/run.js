var twoSum = function (nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        if (map.has(diff)) {
            return [i, map.get(diff)]
        }

        map.set(nums[i], i)
    }
};

const args = process.argv.slice(2);
const nums = JSON.parse(args[0]);
const target = Number(args[1]);

console.log(twoSum(nums, target));