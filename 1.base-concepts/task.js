"use strict"

function solveEquation(a, b, c) {
    let arr;
    let d = b ** 2 - 4 * a * c;
    let x;
    let x1;
    let x2;

    if (d < 0) {
        arr = [];
    } else if (d == 0) {
        x = -b / (2 * a);
        arr = [x];
    } else if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        arr = [x1, x2];
    }
    return arr;
}

// function calculateTotalMortgage(percent, contribution, amount, date) {
//     let totalAmount;

//     // код для задачи №2 писать здесь

//     return totalAmount;
// }