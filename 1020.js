var input =  parseInt(require('fs').readFileSync('/dev/stdin', 'utf8'));

console.log(`${Math.floor((input/365))} ano(s)`);
input = input % 365;
console.log(`${Math.floor((input/30))} mes(es)`);
input = input % 30;
console.log(`${Math.floor((input))} dia(s)`);
