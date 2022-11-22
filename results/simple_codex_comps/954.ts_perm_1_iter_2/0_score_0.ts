const tree2str: (t: { left: { val: string; right: any; left: any }; right: any; val: string; } | null) => string = function (t) {
    if (!t)
        return "";
    const left: string = tree2str(t.left);
    const right: string = tree2str(t.right);
    if (right)
        return `${t.val}(${left})(${right})`;
    else if (left)
        return `${t.val}(${left})`;
    else
        return `${t.val}`;
};
