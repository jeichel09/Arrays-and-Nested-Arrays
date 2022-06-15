function solve(arr) {
    let result = [];
    arr.sort(function(a, b) {
        return a - b;
    });
    for (let i = Math.floor(arr.length / 2); i < arr.length; i ++) {
        result.push(arr[i]);
    }
    return result;
}
console.log(solve([4, 7, 2, 5]));
console.log(solve([3, 19, 14, 7, 2, 19, 6]));