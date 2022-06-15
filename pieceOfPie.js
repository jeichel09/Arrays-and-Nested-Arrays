function solve(pies, t1, t2) {
    let result = [];
    let i1 = pies.indexOf(t1);
    let i2 = pies.indexOf(t2);
    result = pies.slice(i1, i2+1);
    return result;
}
console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Key Lime Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Key Lime Pie'
));
console.log(solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
));