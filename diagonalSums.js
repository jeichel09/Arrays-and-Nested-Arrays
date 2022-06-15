function solve(arr) {
    let main = 0;
    let secondary = 0;
    for (let i = 0; i < arr.length; i ++) {
        let k = i
        let m = arr.length - i - 1;
        main += arr[i][k];
        secondary += arr[i][m];
    }

    console.log(main,secondary);
}
solve([[20, 40],
    [10, 60]]);
solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);