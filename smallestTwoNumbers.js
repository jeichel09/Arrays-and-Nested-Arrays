function solve(arr) {
   let result = [];
   arr.sort(function(a, b) {
        return a - b;
    });
   result = arr.slice(0,2); 
   console.log(result.join(" ")); 
}
solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);