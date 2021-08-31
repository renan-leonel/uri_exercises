var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valores = input.split("\n");

var linha1 = valores[0].split(" ");
var linha2 = valores[1].split(" ");
var x1 = linha1.shift();
var y1 = linha1.shift();
var x2 = linha2.shift();
var y2 = linha2.shift();

var distancia = Math.sqrt(((x2-x1)**2 + (y2-y1)**2));

console.log(distancia.toFixed(4));