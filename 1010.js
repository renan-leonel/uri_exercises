var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var linhas = input.split("\n");

var x = linhas.shift();
var y = linhas.shift();

var peça1 = x.split(" "); 
var peça2 = y.split(" "); 

var codigo1 = parseInt(peça1.shift());
var numero1 = parseInt(peça1.shift());
var valor1 = parseFloat(peça1.shift()).toFixed(2);

var codigo2 = parseInt(peça2.shift());
var numero2 = parseInt(peça2.shift());
var valor2 = parseFloat(peça2.shift()).toFixed(2);

var total = ((parseInt(numero1) * parseFloat(valor1).toFixed(2)) + (parseInt(numero2) * parseFloat(valor2).toFixed(2)));

console.log(`VALOR A PAGAR: R$ ${parseFloat(total).toFixed(2)}`);