var input =  parseInt(require('fs').readFileSync('/dev/stdin', 'utf8'));

console.log(input);
console.log(`${Math.floor((input/100))} nota(s) de R$ 100,00`);
input = input % 100;
console.log(`${Math.floor((input/50))} nota(s) de R$ 50,00`);
input = input % 50;
console.log(`${Math.floor((input/20))} nota(s) de R$ 20,00`);
input = input % 20;
console.log(`${Math.floor((input/10))} nota(s) de R$ 10,00`);
input = input % 10;
console.log(`${Math.floor((input/5))} nota(s) de R$ 5,00`);
input = input % 5;
console.log(`${Math.floor((input/2))} nota(s) de R$ 2,00`);
input = input % 2;
console.log(`${Math.floor((input/1))} nota(s) de R$ 1,00`);