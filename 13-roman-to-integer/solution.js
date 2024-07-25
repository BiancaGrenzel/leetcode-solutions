var romanToInt = function (s) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let num = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let nextChar = s[i + 1]
        let value = romanNumerals[char]
        let nextValue = romanNumerals[nextChar]

        if (!!nextValue && value < nextValue) {
            num -= value;
        } else {
            num += value;
        }
    }

    return num;
};