var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var linhas = input.split("\n");

var A = parseInt(linhas.shift());
var B = parseInt(linhas.shift());

var PROD = A * B;

console.log(`PROD = ${PROD}`);