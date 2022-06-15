function solve(arr) {
    let sum = 0;
    if (arr.length === 1) {
        let item = arr.pop();
        return item;
    } else if (arr.length > 1) {
        let item = arr.shift();
        sum += Number(item);
        let item2 = arr.pop();
        sum += Number(item2);
        return sum;
    }
}
console.log(solve(['20', '30', '40']));
console.log(solve(['5', '10']));
console.log(solve(['12']));