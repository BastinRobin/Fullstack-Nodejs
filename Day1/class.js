/**
 * Classes
 */
const Calculator = class {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }

    sum = () => {
        return this.first + this.second;
    }

    diff = () => {
        return this.first - this.second;
    }

    mul = () => {
        return this.first * this.second;
    }

    div = () => {
        return this.first / this.second;
    }  

}



calc = new Calculator(100, 500);

console.log('Sum:', calc.sum());
console.log('Diff:', calc.diff());
console.log('Multiply:', calc.mul());
console.log('Divide', calc.div());
