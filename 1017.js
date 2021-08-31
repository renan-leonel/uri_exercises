var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var linhas = input.split("\n");

var tempo = parseInt(linhas.shift());
var velocidade = parseInt(linhas.shift());

var distancia = parseFloat(velocidade*tempo).toFixed(3);
var litros = parseFloat(distancia/12).toFixed(3);

console.log(litros);
