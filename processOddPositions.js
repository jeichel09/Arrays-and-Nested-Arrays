function solve(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i ++) {
        if (i % 2 !== 0) {
            result.push(arr[i] * 2);
        }
    }
    let reversed = result.reverse();
    console.log(reversed.join(" "));
}
solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);