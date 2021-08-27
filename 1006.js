var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var linhas = input.split("\n");

var A = parseFloat(linhas.shift()).toFixed(1);
var B = parseFloat(linhas.shift()).toFixed(1);
var C = parseFloat(linhas.shift()).toFixed(1);

var MEDIA = (((A*2) + (B*3) + (C*5))/10).toFixed(1)

console.log(`MEDIA = ${MEDIA}`);