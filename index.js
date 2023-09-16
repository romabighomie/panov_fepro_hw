function createSum() {
    let sum = 0;

    return function(x) {
        sum += x;
        return sum;
    };
}

const sum = createSum();

console.log(sum(1));
console.log(sum(10));
console.log(sum(50)); 