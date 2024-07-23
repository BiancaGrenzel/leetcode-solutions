var frequencySort = function (nums) {
    var frequency = {};

    nums.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1
    });

    nums.sort((a, b) => {
        const f1 = frequency[a];
        const f2 = frequency[b];

        if (f1 === f2) {
            return b - a;
        }

        return f1 - f2;
    });

    return nums;
};

const args = process.argv.slice(2).map(Number);

console.log(frequencySort(args));

// How to run this solution? 
// On terminal, go to 1636-sort-array-by-increasing-frequency folder
// then type node run.js 4 3 1 2 2 3 4 4
// you can change the list of number as you wish
