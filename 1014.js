var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var linhas = input.split("\n");

var A = parseInt(linhas.shift()); 
var B = parseFloat(linhas.shift()); 

var consumo = (A/B).toFixed(3);

console.log(`${consumo} km/l`);