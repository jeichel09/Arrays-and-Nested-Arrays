function solve(arr) {
    let max = Math.max(...[].concat(...arr));
    return max; 
}
console.log(solve([[20, 50, 10],
    [8, 33, 145]]));
console.log(solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]));