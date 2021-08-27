var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var linhas = input.split("\n");

var funcionario = parseInt(linhas.shift());
var horas = parseInt(linhas.shift());
var valor = parseFloat(linhas.shift()).toFixed(2);

var salario = parseFloat(horas*valor).toFixed(2);

console.log(`NUMBER = ${funcionario}`);
console.log(`SALARY = U$ ${salario}`);
