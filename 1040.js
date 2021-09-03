var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var numbers = input.split("\n");

var x = numbers[0]

var notas = x.split(" ");
var exame = parseFloat(numbers[1]);

var n1 = parseFloat(notas[0]).toFixed(1);
var n2 = parseFloat(notas[1]).toFixed(1);
var n3 = parseFloat(notas[2]).toFixed(1);
var n4 = parseFloat(notas[3]).toFixed(1);

var media = parseFloat(( (n1*2)+(n2*3)+(n3*4)+(n4*1)) / 10).toFixed(1);

console.log(`Media: ${media}`);

if(media>=7){
    console.log("Aluno aprovado.");
}

else if(media>=5 && media<=6.9){
    console.log("Aluno em exame.");
    console.log(`Nota do exame: ${parseFloat(exame).toFixed(1)}`);

    var newmedia = (parseFloat(media)+exame)/2;

    if(media>=5){
        console.log("Aluno aprovado.");
    }

    else if(media<5){
        console.log("Aluno reprovado.")
    }

    console.log(`Media final: ${parseFloat(newmedia).toFixed(1)}`);
}

else if(media<5){
    console.log("Aluno reprovado.")
}