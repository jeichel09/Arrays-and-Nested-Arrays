function solve(n, k) {
    let result = [1];
    for (let i = 1; i < n; i ++) {
        let newNum = 0;
        if (i < k) {
            for (let x = 0; x < i; x ++) {
                newNum += result[x];
            }
            result.push(newNum);
        } else {
            for (let y = i-k; y < i; y ++) {
                newNum += result[y];
            }
            result.push(newNum);
        }
    }
    return result;
}
console.log(solve(6, 3));
console.log(solve(8, 2));