var frequencySort = function (nums) {
    var frequency = {};

    nums.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1
    })

    nums.sort((a, b) => {
        const f1 = frequency[a]
        const f2 = frequency[b]

        if (f1 === f2) {
            return b - a;
        }

        return f1 - f2;
    })

    return nums;
};