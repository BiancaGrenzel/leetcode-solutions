var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }

    var xToString = x.toString();

    for (var i = 0; i < xToString.length / 2; i++) {
        var length = xToString.length;

        if (xToString[i] !== xToString[length - i - 1]) {
            return false;
        }
    }

    return true;
};

const arg = Number(process.argv[2]);

console.log(isPalindrome(arg));

// How to run this solution? 
// On terminal, go to 9-palindrome-number folder
// then type: node run.js 12121
// you can change the number as you wish
