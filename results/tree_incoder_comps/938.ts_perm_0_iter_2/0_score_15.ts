const countGoodSubstrings: (s: string) => number = function (s) {
    let res: number = 0;
    for (let i: number = 2; i < s.length; i++) {
        if (chk(s, i))
            res++;
    }
    return res;
};
function chk(s: any, i: any): any {
    return s[i - 2] !== s[i - 1] && s[i - 2] !== s[i] && s[i - 1] !== s[i];
}
