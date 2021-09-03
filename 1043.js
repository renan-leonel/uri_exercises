var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var numbers = input.split(" ");

var a = parseFloat(numbers[0]);
var b = parseFloat(numbers[1]);
var c = parseFloat(numbers[2]);

var perimetro = 0;
var area = 0;

if(a + b == c || a + c == b || b + c == a){
    area = parseFloat((a+b)*c/2);
    console.log(`Area = ${parseFloat(area).toFixed(1)}`);
}

else{
    perimetro = parseFloat(a) + parseFloat(b) + parseFloat(c);
    console.log(`Perimetro = ${parseFloat(perimetro).toFixed(1)}`);
}