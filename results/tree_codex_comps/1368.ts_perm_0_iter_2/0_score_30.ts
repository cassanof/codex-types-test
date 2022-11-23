const findNthDigit: any = function (n) {
    let start: any = 1;
    let len: any = 1;
    let base: any = 9;
    while (n > len * base) {
        n = n - len * base;
        len++;
        start *= 10;
        base *= 10;
    }
    let target: any = start + (n - 1) / len;
    let reminder: any = (n - 1) % len;
    return ("" + target).charAt(reminder);
};
