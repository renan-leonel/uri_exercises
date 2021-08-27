var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var linhas = input.split("\n");

var A = parseFloat(linhas.shift()).toFixed(1);
var B = parseFloat(linhas.shift()).toFixed(1);

var MEDIA = (((A*3.5) + (B*7.5))/11).toFixed(5)

console.log(`MEDIA = ${MEDIA}`);