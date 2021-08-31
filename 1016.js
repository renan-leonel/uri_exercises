var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var tempo = parseInt(input*2);

console.log(`${tempo} minutos`);
