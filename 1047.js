var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var numbers = input.split(" ");

let hora_inicial = parseInt(numbers.shift())
let minuto_inicial = parseInt(numbers.shift())
let hora_final = parseInt(numbers.shift())
let minuto_final = parseInt(numbers.shift())
let tempo_hora = 0, tempo_minuto = 0

if(hora_inicial == hora_final){
    if(minuto_inicial < minuto_final){
        tempo_hora = 0
        tempo_minuto = minuto_final - minuto_inicial
    }
    else if(minuto_inicial == minuto_final){
        tempo_hora = 24
        tempo_minuto = 0
    }
    else{
        tempo_hora = 23
        tempo_minuto = 60 - (minuto_inicial - minuto_final)
    }
}

else if(hora_inicial < hora_final){
    if(minuto_inicial > minuto_final){
        tempo_hora = hora_final - hora_inicial - 1
        tempo_minuto = 60 - (minuto_inicial - minuto_final)
    }
    else if(minuto_inicial == minuto_final){
        tempo_hora = hora_final - hora_inicial
        tempo_minuto = 0
    }
    else{
        tempo_hora = hora_final - hora_inicial
        tempo_minuto = minuto_final - minuto_inicial
    }
}

else{
    if(minuto_inicial > minuto_final){
        tempo_hora = 24 - (hora_inicial - hora_final) - 1
        tempo_minuto = 60 - (minuto_inicial- minuto_final)
    }
    else if(minuto_inicial == minuto_final){
        tempo_hora = 24 - (hora_inicial - hora_final)
        tempo_minuto = 0
    }
    else{
        tempo_hora = 24 - (hora_inicial - hora_final)
        tempo_minuto = 60 - (minuto_inicial- minuto_final)
    }
}

console.log(`O JOGO DUROU ${tempo_hora} HORA(S) E ${tempo_minuto} MINUTO(S)`)