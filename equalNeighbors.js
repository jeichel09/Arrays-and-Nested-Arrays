function solve(mx) {
    let counter = 0;
    for (let i = 0; i < mx.length; i++) {
        for (let j = 0; j < mx[i].length - 1; j++) {
            if (mx[i][j] === mx[i][j+1]) {
                counter++;
            }
        }
    }

    for (let y = 0; y < mx[0].length; y++) {
        for (let x = 0; x < mx.length - 1; x++) {
            if (mx[x][y] === mx[x+1][y]) {
                counter++;
            }
        }
    }
    
    return counter;
}
console.log(solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]));
console.log(solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]));