var twoSum = function(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        if(map.has(diff)) {
            return [i, map.get(diff)]
        }

        map.set(nums[i], i)
    }
};

// How to run this solution? 
// On terminal, go to 1-two-sum folder
// then type node run.js "[2, 7, 11, 15]" 9
// you can change the list of number and the target number as you wish