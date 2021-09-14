var salario = parseFloat(require('fs').readFileSync('/dev/stdin', 'utf8')).toFixed(2);

var x = salario;
var percentual = 0

if (salario>0 && salario <= 400.00){
    salario = salario * 1.15;
    percentual = 15;
}

else if(salario>=400.01 && salario <= 800.00){
    salario = salario * 1.12;
    percentual = 12;
}

else if(salario>=800.01 && salario <= 1200.00){
    salario = salario * 1.1;
    percentual = 10;
}

else if(salario>=1200.01 && salario <= 2000.00){
    salario = salario * 1.07;
    percentual = 7;
}

else if(salario>2000){
    salario = salario * 1.04;
    percentual = 4;
}

console.log(`Novo salario: ${parseFloat(salario).toFixed(2)}`);
console.log(`Reajuste ganho: ${parseFloat(salario - x).toFixed(2)}`);
console.log(`Em percentual: ${percentual} %`);