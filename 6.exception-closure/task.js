function parseCount(string) {
    let result = Number.parseInt(string);
    if (Number.isNaN(result)) {
        throw new Error("Невалидное значение");
    }
    return result;
}

function validateCount(str) {
    try {
        return parseCount(str);
    } catch (err) {
        return err;
    }
}

class Triangle {
    constructor(side1, side2, side3) {
        let sum1 = side1 + side2;
        let sum2 = side2 + side3;
        let sum3 = side1 + side3;
        if (sum1 < side3 || sum2 < side1 || sum3 < side2) {
            throw new Error("Треугольник с такими сторонами не существует");
        } else {
            this.side1 = side1;
            this.side2 = side2;
            this.side3 = side3;
        }
    }
    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }
    getArea() {
        let p = this.getPerimeter() / 2;
        let s = (Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3))).toFixed(3);
        return Number(s);
    }
}

function getTriangle(side1, side2, side3) {
    try {
        return new Triangle(side1, side2, side3);
    } catch {
        return {
            getArea() {
                return 'Ошибка! Треугольник не существует';
            },
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            }
        };
    }
}