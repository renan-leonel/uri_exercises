var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var numbers = input.split(" ");

var horaInicial = parseInt(numbers[0]);
var horaFinal = parseInt(numbers[1]);

var tempo = horaFinal - horaInicial;

if(horaFinal<=horaInicial){
    tempo = tempo + 24;
}

console.log(`O JOGO DUROU ${tempo} HORA(S)`);