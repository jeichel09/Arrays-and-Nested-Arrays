function solve(arr) {
    let newArr = [];
    for (num of arr) {
        if (num < 0) {
            newArr.unshift(num);
        } else {
            newArr.push(num);
        }
    }
    for (n of newArr) {
        console.log(n);
    }
}
solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);