var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var numbers = input.split(" ");

var base = parseFloat(numbers.shift()).toFixed(5);
var altura = parseFloat(numbers.shift()).toFixed(5);
var area = parseFloat((base*altura)/2).toFixed(5);

console.log(`Concluimos que, dado o limite da entrada, a resposta seria:  y = f(x) = ${area}.`);