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