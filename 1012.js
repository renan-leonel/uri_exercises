var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var linhas = input.split(" ");

var A = parseFloat(linhas.shift()); 
var B = parseFloat(linhas.shift()); 
var C = parseFloat(linhas.shift()); 
var pi = 3.14159;

var triangulo = (A*C)/2; 
var circulo = pi*(C**2);
var trapezio = ((A+B)/2)*C;
var quadrado = B*B
var retangulo = A*B;

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
console.log(`CIRCULO: ${circulo.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
console.log(`RETANGULO: ${retangulo.toFixed(3)}`);