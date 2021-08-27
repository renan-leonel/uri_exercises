var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var linhas = input.split("\n");

var vendedor = linhas.shift();
var salario = parseFloat(linhas.shift()).toFixed(2);
var vendas = parseFloat(linhas.shift()).toFixed(2);

var total = (parseFloat(salario) + parseFloat(vendas*0.15)).toFixed(2);

console.log(`TOTAL = R$ ${total}`);
