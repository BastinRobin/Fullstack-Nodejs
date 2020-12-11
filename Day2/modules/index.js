// var calc = require('./calculator');
var calc = require('hybrid-calculator')

a = 1000;
b = 5000;

cal = new calc.Calculator(a, b);
console.log(cal.addition());
console.log(cal.subtract());
console.log(cal.multiply());
console.log(cal.division());
console.log(cal.findTheMin());
console.log(cal.findTheMax());
