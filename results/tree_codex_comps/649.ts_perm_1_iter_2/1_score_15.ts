const middleNode: any = function (head) {
    if (head == null)
        return null;
    let count: any = 1;
    let iter: any = head;
    while (iter.next) {
        iter = iter.next;
        count++;
    }
    count = (count / 2) >> 0;
    while (count) {
        head = head.next;
        count--;
    }
    return head;
};
