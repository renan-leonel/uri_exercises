var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var linhas = input.split("\n");

var A = parseInt(linhas.shift())
var B = parseInt(linhas.shift())
var C = parseInt(linhas.shift())
var D = parseInt(linhas.shift())

var DIFERENCA = (A*B-C*D);

console.log(`DIFERENCA = ${DIFERENCA}`);