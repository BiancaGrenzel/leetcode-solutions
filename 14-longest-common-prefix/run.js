var longestCommonPrefix = function (strs) {
    if (!strs.length) return '';

    for (let i = 0; i <= strs[0].length; i++) {
        if (!strs.every((string) => string[i] === strs[0][i])) {
            return strs[0].slice(0, i);
        }
    }

    return strs[0];
};

const args = process.argv.slice(2);
console.log(longestCommonPrefix(args));

// How to run this solution? 
// On terminal, go to 14-longest-common-prefix folder
// then type: node run.js flower flow flight
// you can change the words as you wish