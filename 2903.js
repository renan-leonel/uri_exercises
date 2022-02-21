var input = require('fs').readFileSync('/dev/stdin', 'utf8'); 
input = input.split(".")

let x = parseFloat(input[0]);
let y = parseFloat(input[1]);

var mdc = function(num1, num2) {
    var resto;

    do {
        resto = num1 % num2;

        num1 = num2;
        num2 = resto;

    } while (resto != 0);

    return num1;
}

//gambiarra pra não dar erro em casos enormes por conta do .00 no final dos inputs (erros de aproximação/arredondamento)
x = x*100
input = x + y

let fatias = 360*100/mdc(360*100,input)
console.log(fatias)


