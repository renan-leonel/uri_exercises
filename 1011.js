var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var linhas = input.split("\n");
var r = parseFloat(linhas.shift()); 
var pi = 3.14159;

var volume = ((4/3) * pi * (r**3));

console.log(`VOLUME = ${volume.toFixed(3)}`);
