Array.prototype.uniq = function() {
    let arr = [];
    this.forEach(function(ele) {
        if (!arr.includes(ele)){
            arr.push(ele);
        }
    });
    return arr;
};
console.log([1, 2, 2, 3, 3, 3].uniq());



Array.prototype.twoSum = function() {
    let origArr = this
    let arr = [];
    this.forEach(function(ele) {
        if (origArr.includes(-ele) && !arr.includes([-ele, ele].toString())){
            arr.push([ele, -ele].toString());
        }
    });

    return arr;
};
console.log([1, 2, -2, 3, -3, 3].twoSum())



Array.prototype.transpose = function(){
    let transposedArray = [];
    
    for (let i = 0; i < this[0].length; i++) {
        transposedArray[i] = [];
        for (let j = 0; j < this.length; j++) {
            transposedArray[i][j] = this[j][i];
        }
    }
    return transposedArray;
};
console.log([["a","b"], ["c","d"], ["e","f"]].transpose())
