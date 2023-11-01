"use strict";
class CompareElements {
    constructor(arr) {
        this.arr = arr;
    }
    compare(comparator) {
        let count = 0;
        for (const key of this.arr) {
            if (key === comparator) {
                count++;
            }
        }
        return count;
    }
}
let c = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);

console.log(c.compare('b'));
