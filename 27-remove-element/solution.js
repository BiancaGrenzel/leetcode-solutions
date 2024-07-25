var removeElement = function (nums, val) {
    let index = 0;

    while (index < nums.length) {
        if (nums[index] === val) {
            nums.splice(index, 1)
        } else {
            index++
        }
    }

    return nums.length;
};