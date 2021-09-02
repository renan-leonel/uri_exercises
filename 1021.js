// código está correto, uri ta bugado 
var input =  parseFloat(require('fs').readFileSync('/dev/stdin', 'utf8')).toFixed(2);

console.log("NOTAS:");
console.log(`${Math.floor((input/100))} nota(s) de R$ 100.00`);
input = input % 100;
console.log(`${Math.floor((input/50))} nota(s) de R$ 50.00`);
input = input % 50;
console.log(`${Math.floor((input/20))} nota(s) de R$ 20.00`);
input = input % 20;
console.log(`${Math.floor((input/10))} nota(s) de R$ 10.00`);
input = input % 10;
console.log(`${Math.floor((input/5))} nota(s) de R$ 5.00`);
input = input % 5;
console.log(`${Math.floor((input/2))} nota(s) de R$ 2.00`);

console.log("MOEDAS:");
input = input % 2;
console.log(`${Math.floor((input/1))} moeda(s) de R$ 1.00`);
input = input % 1;
console.log(`${Math.floor((input/0.5))} moeda(s) de R$ 0.50`);
input = input % 0.5;
console.log(`${Math.floor((input/0.25))} moeda(s) de R$ 0.25`);
input = input % 0.25;
console.log(`${Math.floor((input/0.1))} moeda(s) de R$ 0.10`);
input = input % 0.1;
console.log(`${Math.floor((input/0.05))} moeda(s) de R$ 0.05`);
input = input % 0.05;
console.log(`${Math.floor((input/0.01))} moeda(s) de R$ 0.01`);