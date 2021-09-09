var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var numbers = input.split(" ");

var x = numbers.sort(((a,b) => a-b)).reverse();

var a = parseFloat(x[0]);
var b = parseFloat(x[1]);
var c = parseFloat(x[2]);

if(a>=(b+c)){
    console.log("NAO FORMA TRIANGULO");
    return;
}
if((a**2) == (b**2 + c**2)){
    console.log("TRIANGULO RETANGULO");
}
if((a**2) > (b**2 + c**2)){
    console.log("TRIANGULO OBTUSANGULO");
}
if((a**2) < (b**2 + c**2)){
    console.log("TRIANGULO ACUTANGULO");
}
if(a==b && a==c){
    console.log("TRIANGULO EQUILATERO");
}
if((a==b && a!=c) || (a==c && b!=c) || (c==b && b!=a)){
    console.log("TRIANGULO ISOSCELES");
}