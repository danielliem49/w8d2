const ARR = [1,2,3,4,5];
const ARR2 = [5,6,3,1,2,4,9,8,7];


Array.prototype.myEach = function(func) {
    for(let i = 0; i < this.length; i++) {
        func(this[i]);
    }
};

let newARR1 = ARR.myEach((num) => {
    return num * 2;
});
console.log(newARR1)




Array.prototype.myMap = function(func) {
    let arr = [];
    this.myEach((num) => {
        arr.push(func(num));
    })
    return arr;
};

let newARR2 = ARR.myMap((num) =>{
    return num * 3;
});

console.log(newARR2)





Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    if (initialValue === undefined) {
        accumulator = this[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i]);
    }
    return accumulator;
};

let newARR3 = ARR.myReduce((num1, num2) => {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}, 10);

console.log(newARR3)









