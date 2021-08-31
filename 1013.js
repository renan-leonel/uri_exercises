var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var linhas = input.split(" ");

var A = parseFloat(linhas.shift()); 
var B = parseFloat(linhas.shift()); 
var C = parseFloat(linhas.shift()); 

var X = (A+B+ Math.abs(A-B))/2
var maior = (X+C+ Math.abs(X-C))/2

console.log(`${maior} eh o maior`);