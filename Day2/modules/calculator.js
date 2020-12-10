/**
 * Calculator Module
 * @param {*} first 
 * @param {*} second 
 */
const Calculator = class {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }

    /**
     * Addition Operations
     * @params : `this.first` and `this.second`;
     * @return type: number
     * @description: Addition of two given numbers 
     */
    addition = () => {
        return this.first + this.second;
    }


    /**
     * Subtraction Operations
     * @params : `this.first` and `this.second`
     * @return : number
     * @description: "Different of the given numbers" 
     */
    subtract = () => {
        return this.first - this.second;
    }

    /**
     * Multiplication Operations
     * @params : `this.first` and `this.second`
     * @return : numbers
     * @description: Multiplication of two given numbers
     */
    multiply = () => {
        return this.first * this.second;
    }


    /**
     * Division Operations
     * @params : `this.first` and `this.second`
     * @return : numbers
     * @description: Division of given two numbers
     */
    division = () => {
        return this.first / this.second;
    }

    /**
     * Find the max of given values
     * @params : `this.first` and `this.second`
     * @return : numbers
     * @description: Return the Max numbers 
     */
    findTheMax = () => {
        if (this.first > this.second) {
            return this.first;
        } else {
            return this.second;
        }
    }

    /**
     * Find the min of given values
     * @params : `this.first` and `this.second`
     * @return : numbers
     * @description: Return the min numbers 
     */
    findTheMin = () => {
        return this.first > this.second ? this.second : this.first;
    }

}  


module.exports = {
    Calculator: Calculator
};