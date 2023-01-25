Array.prototype.bubblesort = function () {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i + 1]) {
                sorted = false;
                temp = this[i];
                this[i] = this[i + 1];
                this[i + 1] = temp;
            }
        }
    }
    return this;
};
console.log(ARR2.bubblesort())




String.prototype.substrings = function () {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (!result.includes(this.slice(i, j))) {
                result.push(this.slice(i, j));
            }
        }
    }
    return result;
};
console.log("banana".substrings())