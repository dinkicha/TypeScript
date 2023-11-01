class CompareElements<T> {
    private arr: T[];

    constructor(arr: T[]) {
        this.arr = arr;
    }
    compare(comparator: T): number {
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