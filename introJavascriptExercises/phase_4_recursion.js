function range(start, end){
    if (start === end){
        return end;
    }
    return [start] + range(start+1, end);
};
console.log(range(1,5))