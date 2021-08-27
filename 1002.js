var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var n = 3.14159;
var raio = parseFloat(input).toFixed(2);
var area = parseFloat(n * (raio ** 2)).toFixed(4);

console.log(`A=${area}`);