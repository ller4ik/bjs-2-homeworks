"use strict";

function solveEquation(a, b, c) {
    let arr;
    let x = -b / (2 * a);
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    let discriminant = b ** 2 - 4 * a * c;

    if (discriminant < 0) {
        arr = [];
    } else if (discriminant == 0) {
        arr = [x];
    } else if (discriminant > 0) {
        arr = [x1, x2];
    }
    return arr;
}

// function calculateTotalMortgage(percent, contribution, amount, date) {
//     let totalAmount;

//     // код для задачи №2 писать здесь

//     return totalAmount;
// }